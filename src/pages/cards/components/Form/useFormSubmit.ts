import { useCardsContext } from "../../CardsContext";
import { useSaveCard, useUpdateCard } from "../../useCards";
import { FormState } from "./definitions";

export function useFormSubmit(dataForm: FormState) {
  const {
    modalForm: { id: currentId },
  } = useCardsContext();

  const { saveCard } = useSaveCard();
  const { updateCard } = useUpdateCard();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, description, image } = dataForm;

    if (currentId) {
      updateCard({ title, description, id: currentId });
      return;
    }

    saveCard({
      title,
      description,
      image,
    });
  };

  return {
    handleFormSubmit,
  };
}
