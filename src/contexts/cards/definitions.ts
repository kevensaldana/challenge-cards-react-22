import { Dispatch } from "react";
import Card from "./domain/Card";

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
      loading: boolean;
      error: string | null;
      id: string | null;
      mode?: Mode | undefined;
    }>
  >;
  cards: {
    list: Card[];
  };
  setCards?: Dispatch<
    Partial<{
      list: Card[];
      loading: boolean;
      error: string | null;
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
  },
};
