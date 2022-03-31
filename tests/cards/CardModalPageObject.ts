import { fireEvent, RenderResult } from "@testing-library/react";

export default class CardModalPageObject {
  static editInputTitle(wrapper: RenderResult, value: string) {
    const input = wrapper.getByLabelText(/title/i);
    fireEvent.change(input, { target: { value: value } });
  }

  static editInputDescription(wrapper: RenderResult, value: string) {
    const input = wrapper.getByLabelText(/description/i);
    fireEvent.change(input, { target: { value: value } });
  }

  static clickCreateButton(wrapper: RenderResult) {
    const button = wrapper.getByRole("button", {
      name: /create/i,
    });
    fireEvent.click(button);
  }

  static clickUpdateButton(wrapper: RenderResult) {
    const button = wrapper.getByRole("button", {
      name: /update/i,
    });
    fireEvent.click(button);
  }
}
