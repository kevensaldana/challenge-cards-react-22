import { Button } from "../shared/components";
import { useCardsContext } from "./CardsContext";
import CardCollection from "./components/Collection";
import ModalCardForm from "./components/Form/ModalCardForm";
import { Mode } from "./definitions";
import { SCContainer, SCHeader, SCTitle } from "./styles";
import { useCards } from "./useCards";

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
      {modalForm.isOpen && <ModalCardForm />}
    </>
  );
};

export default CardsView;
