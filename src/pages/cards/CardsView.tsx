import { lazy, Suspense } from "react";
import { Button } from "../../components";
import { useCardsContext } from "./CardsContext";
import CardCollection from "./components/Collection";
import { Mode } from "./definitions";
import { SCContainer, SCHeader, SCTitle } from "./styles";
import { useCards } from "./useCards";

const ModalCardForm = lazy(() =>
  import("./components").then((module) => ({
    default: module.ModalCardForm,
  }))
);

const CardsView = () => {
  const {
    setModalForm,
    modalForm,
    cards: { list: cardList },
  } = useCardsContext();

  useCards();

  return (
    <>
      <SCContainer>
        <SCHeader>
          <SCTitle>Cards App</SCTitle>
          <Button
            aria-label="Add"
            onClick={() => {
              setModalForm!({ isOpen: true, mode: Mode.NEW });
            }}
          >
            Add
          </Button>
        </SCHeader>

        {cardList.length > 0 ? (
          <CardCollection cards={cardList.map((card) => card.toCardItem())} />
        ) : (
          <p>No cards yet</p>
        )}
      </SCContainer>
      {modalForm.isOpen && (
        <Suspense fallback={null}>
          <ModalCardForm />
        </Suspense>
      )}
    </>
  );
};

export default CardsView;
