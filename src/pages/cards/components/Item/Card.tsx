import { SyntheticEvent } from "react";
import { Button } from "../../../../components";
import { useCardsContext } from "../../CardsContext";
import { Mode } from "../../definitions";
import { useDeleteCard } from "../../useCards";
import defaultCard from './defaultCard.jpeg'
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

const Card = ({ id, title, description, image = defaultCard }: CardProps) => {
  const { setModalForm } = useCardsContext();
  const { deleteCard } = useDeleteCard();

  return (
    <SCCard role="article">
      <SCImage
        src={image}
        alt={title}
        onError={(e: SyntheticEvent<HTMLImageElement>) => {
          e.currentTarget.src = defaultCard;
        }}
      />
      <SCContent>
        <SCTitle>{title}</SCTitle>
        <SCBody>{description}</SCBody>
        <SCFooter>
          <Button
            aria-label="delete"
            color="danger"
            onClick={() => deleteCard({ id })}
          >
            Delete
          </Button>
          <Button
            aria-label="edit"
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
