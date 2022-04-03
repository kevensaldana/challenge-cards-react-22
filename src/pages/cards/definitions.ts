import { Dispatch } from "react";
import { Card, CardFilterName } from "./domain";

export enum Mode {
  NEW,
  EDIT,
}

export interface CardsContextProps {
  modalForm: {
    isOpen: boolean;
    mode?: Mode;
    id: string | null;
  };
  initModalForm?: () => void;
  setModalForm?: Dispatch<
    Partial<{
      isOpen: boolean;
      id: string | null;
      mode?: Mode | undefined;
    }>
  >;
  cards: {
    list: Card[];
    filter: CardFilterName;
  };
  setCards?: Dispatch<
    Partial<{
      list: Card[];
      filter: CardFilterName;
    }>
  >;
}

export const initCardsContext: CardsContextProps = {
  modalForm: {
    isOpen: false,
    mode: Mode.NEW,
    id: null,
  },
  cards: {
    list: [],
    filter: CardFilterName.CREATED_NEWEST,
  },
};
