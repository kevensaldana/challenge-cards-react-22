import { createContext, ReactNode, useContext, useReducer } from "react";
import { CardsContextProps, initCardsContext } from "./definitions";

const CardsContext = createContext<CardsContextProps>(initCardsContext);

const useCardsContext = () => {
  const context = useContext(CardsContext);
  return context;
};

const CardsProvider = ({ children }: { children: ReactNode }) => {
  const [modalForm, setModalForm] = useReducer(
    (
      state: CardsContextProps["modalForm"],
      newState: Partial<CardsContextProps["modalForm"]>
    ) => ({
      ...state,
      ...newState,
    }),
    initCardsContext.modalForm
  );

  const [cards, setCards] = useReducer(
    (
      state: CardsContextProps["cards"],
      newState: Partial<CardsContextProps["cards"]>
    ) => ({
      ...state,
      ...newState,
    }),
    initCardsContext.cards
  );

  const initModalForm = () => {
    setModalForm(initCardsContext.modalForm);
  };

  return (
    <CardsContext.Provider
      value={{
        ...initCardsContext,
        modalForm,
        setModalForm,
        initModalForm,
        cards,
        setCards,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export { CardsProvider, useCardsContext };
