/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { act, fireEvent, render, waitFor } from "@testing-library/react";

import CardsView from "../../src/pages/cards/cardsView";
import { CardsProvider } from "../../src/pages/cards/CardsContext";
import { AuthProvider } from "../../src/contexts";
import { QueryClient, QueryClientProvider } from "react-query";

import { CardRepository } from "../../src/pages/cards/domain";
import { CardsMother } from "./domain/CardsMother";
import { CardMother } from "./domain/CardMother";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      staleTime: 5000,
      retryOnMount: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

const createWrapper = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CardsProvider>
          <CardsView />
        </CardsProvider>
      </AuthProvider>
    </QueryClientProvider>
  );

describe("Cards", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("Page", () => {
    it("should show a message when card list is empty", () => {
      const wrapper = createWrapper();
      const text = wrapper.getByText("No cards yet");
      expect(text).toBeInTheDocument();
    });

    it("should have a button to add new cards", () => {
      const wrapper = createWrapper();
      const button = wrapper.getByRole("button", {
        name: "Add",
      });
      expect(button).toBeInTheDocument();
    });

    it("should show a card list on page when user finish in add cards", async () => {
      const cardsRandom = CardsMother.random();
      jest.spyOn(CardRepository, "findAll").mockResolvedValue(cardsRandom);

      const wrapper = createWrapper();

      const cards = await wrapper.findAllByRole("article");

      await waitFor(() => {
        expect(cards).toHaveLength(cardsRandom.length);
      });
    });
  });

  describe("Modal", () => {
    it("should close the modal and add a card on page when click on create button", async () => {
      const cardRandom = CardMother.random();
      jest.spyOn(CardRepository, "save").mockResolvedValue(cardRandom);
      jest.spyOn(CardRepository, "findAll").mockResolvedValue([cardRandom]);
      const wrapper = createWrapper();
      const buttonAdd = wrapper.getByRole("button", {
        name: "Add",
      });
      fireEvent.click(buttonAdd);

      const titleInput = wrapper.getByLabelText(/title/i);
      fireEvent.change(titleInput, { target: { value: "Jane" } });

      const descriptionTextArea = wrapper.getByLabelText(/description/i);
      fireEvent.change(descriptionTextArea, {
        target: { value: "Description" },
      });

      const buttonCreate = wrapper.getByRole("button", {
        name: "Create",
      });
      fireEvent.click(buttonCreate);

      await waitFor(() => {
        expect(wrapper.baseElement).toHaveTextContent(cardRandom.title);
      });
    });
  });
});
