import { useMutation, useQuery } from "react-query";
import { useCardsContext } from "./CardsContext";
import { CardRepository, Card, cardsFilters } from "./domain";

export const useCards = () => {
  const {
    setCards,
    cards: { filter },
  } = useCardsContext();
  const { refetch } = useQuery("cards", CardRepository.findAll, {
    onSuccess: (cards: Card[]) => {
      const orderedCards = cardsFilters[filter].meetCriteria(cards);
      setCards!({
        list: orderedCards,
      });
    },
  });

  return {
    loadCards: refetch,
  };
};

export const useDeleteCard = () => {
  const { loadCards } = useCards();
  const { mutate: deleteCard } = useMutation<void, Error, { id: string }>(
    ({ id }) => CardRepository.delete(id),
    {
      onSuccess: () => {
        loadCards();
      },
    }
  );

  return {
    deleteCard,
  };
};

export const useFindCard = (id: string) => {
  const { data, refetch } = useQuery(
    ["currentCard", id],
    () => CardRepository.find(id),
    {
      enabled: false,
    }
  );

  return {
    card: data,
    findCard: refetch,
  };
};

export const useUpdateCard = () => {
  const { initModalForm } = useCardsContext();

  const { loadCards } = useCards();

  const { mutate: updateCard } = useMutation<
    Card,
    Error,
    {
      title: string;
      description: string;
      id: string;
    }
  >(
    ({ title, description, id }) =>
      CardRepository.update(id, title, description),
    {
      onSuccess: () => {
        initModalForm!();
        loadCards();
      },
    }
  );

  return {
    updateCard,
  };
};

export const useSaveCard = () => {
  const { initModalForm } = useCardsContext();
  const { loadCards } = useCards();

  const { mutate: saveCard } = useMutation<
    Card,
    Error,
    {
      title: string;
      description: string;
      image: File | null;
    }
  >(
    ({ title, description, image }) =>
      CardRepository.save(title, description, image),
    {
      onSuccess: () => {
        initModalForm!();
        loadCards();
      },
    }
  );

  return {
    saveCard,
  };
};
