import { ChangeEvent } from "react";
import { Select } from "../../../../components";
import { useCardsContext } from "../../CardsContext";
import { CardFilterName, cardsFilters } from "../../domain";
import { SCContainer } from "./styles";

const FiltersCards = () => {
  const {
    cards: { filter, list },
    setCards,
  } = useCardsContext();

  const handleFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    const filter = event.target.value as CardFilterName;
    const orderedCards = cardsFilters[filter].meetCriteria(list);

    setCards!({
      filter: event.target.value as CardFilterName,
      list: orderedCards,
    });
  };

  return (
    <SCContainer>
      <Select aria-label="filters" onChange={handleFilter} value={filter}>
        {Object.keys(cardsFilters).map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </Select>
    </SCContainer>
  );
};

export default FiltersCards;
