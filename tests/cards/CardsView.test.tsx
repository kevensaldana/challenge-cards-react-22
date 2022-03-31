/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { waitFor } from "@testing-library/react";

import { CardRepository } from "../../src/pages/cards/domain";
import { CardsMother } from "./domain/CardsMother";
import { createWrapper } from "./utils";
import { CardMother } from "./domain/CardMother";
import CardsViewPageObject from "./CardsViewPageObject";

describe("Cards Page", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("Render", () => {
    it("should show a message when card list is empty", () => {
      jest.spyOn(CardRepository, "findAll").mockResolvedValue([]);

      const wrapper = createWrapper();
      const text = CardsViewPageObject.getEmptyMessage(wrapper);
      expect(text).toBeInTheDocument();
    });

    it("should show a card list on page ", async () => {
      const cardsRandom = CardsMother.random();
      jest.spyOn(CardRepository, "findAll").mockResolvedValue(cardsRandom);

      const wrapper = createWrapper();
      const cards = await CardsViewPageObject.getCards(wrapper);

      await waitFor(() => {
        expect(cards).toHaveLength(cardsRandom.length);
      });
    });
  });

  describe("Interactions", () => {
    it("should show a modal to add new cards", async () => {
      jest.spyOn(CardRepository, "findAll").mockResolvedValue([]);
      // arrange
      const wrapper = createWrapper();

      // act
      CardsViewPageObject.clickCardAddButton(wrapper);

      // assert
      await waitFor(() => {
        expect(CardsViewPageObject.getModal(wrapper)).toBeInTheDocument();
      });
    });

    it("should show a modal to edit a card", async () => {
      // arrange
      const cardRandom = CardMother.random();
      const cardsRandom = [cardRandom];
      jest.spyOn(CardRepository, "findAll").mockResolvedValue(cardsRandom);
      jest.spyOn(CardRepository, "find").mockResolvedValue(cardRandom);

      const wrapper = createWrapper();
      await waitFor(async () => {
        const cards = await CardsViewPageObject.getCards(wrapper);
        expect(cards).toHaveLength(cardsRandom.length);
      });

      // act
      CardsViewPageObject.clickCardEditButton(wrapper);

      // assert
      await waitFor(() => {
        expect(CardsViewPageObject.getModal(wrapper)).toBeInTheDocument();
      });
    });
  });
});
