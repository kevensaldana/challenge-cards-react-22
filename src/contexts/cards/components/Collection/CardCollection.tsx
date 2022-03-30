import Card, { CardProps } from "../Item";
import { SCContainer } from "./styles";

interface CardCollectionProps {
  cards: CardProps[];
}

// ok
const CardCollection = ({ cards }: CardCollectionProps) => {
  return (
    <SCContainer>
      {cards.map(({ id, description, title, image }) => (
        <Card
          key={id}
          id={id}
          description={description}
          title={title}
          image={image}
        />
      ))}
    </SCContainer>
  );
};
export default CardCollection;
