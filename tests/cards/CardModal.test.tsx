/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { fireEvent, waitFor } from "@testing-library/react";

import { CardRepository } from "../../src/pages/cards/domain";
import { createWrapper } from "./utils";
import CardModalPageObject from "./CardModalPageObject";
import CardsViewPageObject from "./CardsViewPageObject";
import { CardMother } from "./domain/CardMother";

describe("Card Modal", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("Interactions", () => {
    it("should add a card when click on create button", async () => {
      // arrange
      const cardRandom = CardMother.random();
      const spySave = jest
        .spyOn(CardRepository, "save")
        .mockResolvedValue(cardRandom);
      jest.spyOn(CardRepository, "findAll").mockResolvedValue([]);

      const wrapper = createWrapper();
      CardsViewPageObject.clickCardAddButton(wrapper);

      await waitFor(() => {
        expect(CardsViewPageObject.getModal(wrapper)).toBeInTheDocument();
      });

      CardModalPageObject.editInputTitle(wrapper, cardRandom.title);
      CardModalPageObject.editInputDescription(wrapper, cardRandom.description);

      // act
      CardModalPageObject.clickCreateButton(wrapper);

      // assert
      await waitFor(() => {
        expect(spySave).toHaveBeenCalledWith(
          cardRandom.title,
          cardRandom.description,
          null
        );
      });
    });

    it("should edit a card when click on update button", async () => {
      // arrange
      const cardEditedRandom = CardMother.random();
      const cardRandom = CardMother.random();
      const cardsRandom = [cardRandom];
      jest.spyOn(CardRepository, "findAll").mockResolvedValue(cardsRandom);
      jest.spyOn(CardRepository, "find").mockResolvedValue(cardRandom);
      const spyUpdate = jest
        .spyOn(CardRepository, "update")
        .mockResolvedValue(cardEditedRandom);

      const wrapper = createWrapper();
      await waitFor(async () => {
        expect(await CardsViewPageObject.getCards(wrapper)).toHaveLength(
          cardsRandom.length
        );
      });

      CardsViewPageObject.clickCardEditButton(wrapper);
      await waitFor(() => {
        expect(CardsViewPageObject.getModal(wrapper)).toBeInTheDocument();
      });

      CardModalPageObject.editInputTitle(wrapper, cardEditedRandom.title);
      CardModalPageObject.editInputDescription(
        wrapper,
        cardEditedRandom.description
      );

      // act
      CardModalPageObject.clickUpdateButton(wrapper);

      // assert
      await waitFor(() => {
        expect(spyUpdate).toHaveBeenCalledWith(
          cardRandom.id,
          cardEditedRandom.title,
          cardEditedRandom.description
        );
      });
    });
  });
});
