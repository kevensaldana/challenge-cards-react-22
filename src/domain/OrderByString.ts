import { Criteria, OrderType } from "./Criteria";
import { OrderArray } from "./OrderArray";

export default class OrderByString implements Criteria {
  private orderBy: OrderType = OrderType.ASC;
  private property: string;

  constructor(orderBy: OrderType, property: string) {
    this.orderBy = orderBy;
    this.property = property;
  }

  meetCriteria<T>(items: T[]) {
    return OrderArray.byPropertyString(items, this.property, this.orderBy);
  }
}
