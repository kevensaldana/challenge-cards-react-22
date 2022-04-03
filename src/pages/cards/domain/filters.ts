import { OrderByString, OrderByDate, OrderType } from "../../../domain";

enum CardFilterName {
  TITLE_AZ = "Title A->Z",
  TITLE_ZA = "Title Z->A",
  CREATED_NEWEST = "Created Newest",
  CREATED_OLDEST = "Created Oldest",
}

const cardsFilters = {
  [CardFilterName.TITLE_AZ]: new OrderByString(OrderType.ASC, "title"),
  [CardFilterName.TITLE_ZA]: new OrderByString(OrderType.DESC, "title"),
  [CardFilterName.CREATED_NEWEST]: new OrderByDate(OrderType.DESC, "created"),
  [CardFilterName.CREATED_OLDEST]: new OrderByDate(OrderType.ASC, "created"),
};

export { cardsFilters, CardFilterName };
