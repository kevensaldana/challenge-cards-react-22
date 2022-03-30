import { SyntheticEvent } from "react";
import { Button } from "../../../../components";
import { useCardsContext } from "../../CardsContext";
import { Mode } from "../../definitions";
import { useDeleteCard } from "../../useCards";
import {
  SCCard,
  SCTitle,
  SCBody,
  SCImage,
  SCFooter,
  SCContent,
} from "./styles";

export interface CardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
}

const Card = ({ id, title, description, image = "" }: CardProps) => {
  const { setModalForm } = useCardsContext();
  const { deleteCard } = useDeleteCard();

  return (
    <SCCard>
      <SCImage
        src={image}
        alt={title}
        onError={(e: SyntheticEvent<HTMLImageElement>) => {
          e.currentTarget.src = "";
        }}
      />
      <SCContent>
        <SCTitle>{title}</SCTitle>
        <SCBody>{description}</SCBody>
        <SCFooter>
          <Button color="danger" onClick={() => deleteCard({ id })}>
            Delete
          </Button>
          <Button
            onClick={() => setModalForm!({ isOpen: true, mode: Mode.EDIT, id })}
          >
            Edit
          </Button>
        </SCFooter>
      </SCContent>
    </SCCard>
  );
};
export default Card;
