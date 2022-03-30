import { Button } from "../../../shared/components";
import { useCardsContext } from "../../CardsContext";
import {
  SCCard,
  SCTitle,
  SCBody,
  SCImage,
  SCFooter,
  SCContent,
} from "./styles";
import imageDefaultUrl from "./defaultCard.jpeg";
import { useDeleteCard } from "../../useCards";
import { Mode } from "../../definitions";
import { SyntheticEvent } from "react";

export interface CardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
}

const Card = ({
  id,
  title,
  description,
  image = imageDefaultUrl,
}: CardProps) => {
  const { setModalForm } = useCardsContext();
  const { deleteCard } = useDeleteCard();

  return (
    <SCCard>
      <SCImage
        src={image}
        alt={title}
        onError={(e: SyntheticEvent<HTMLImageElement>) => {
          e.currentTarget.src = imageDefaultUrl;
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
