import { fireEvent, RenderResult } from "@testing-library/react";

export default class CardsViewPageObject {
  static getEmptyMessage(wrapper: RenderResult) {
    return wrapper.getByText("No cards yet");
  }

  static clickCardAddButton(wrapper: RenderResult) {
    const button = wrapper.getByRole("button", {
      name: /add/i,
    });
    fireEvent.click(button);
  }

  static clickCardEditButton(wrapper: RenderResult) {
    const button = wrapper.getByRole("button", {
      name: /edit/i,
    });
    fireEvent.click(button);
  }

  static async getCards(wrapper: RenderResult) {
    return await wrapper.findAllByRole("article");
  }

  static getModal(wrapper: RenderResult) {
    return wrapper.getByRole("dialog");
  }

  static getDeleteButton(wrapper: RenderResult) {
    return wrapper.getByRole("button", {
      name: /delete/i,
    });
  }
}
