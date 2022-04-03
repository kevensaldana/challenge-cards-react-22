import { OrderType } from "./Criteria";

export class OrderArray {
  static byPropertyString<U>(
    items: U[],
    property: string,
    orderType = OrderType.ASC
  ) {
    const order = orderType === OrderType.ASC ? 1 : -1;

    return items.sort((a: U, b: U) => {
      const aProp = `${a[property as keyof U]}`.toLowerCase();
      const bProp = `${b[property as keyof U]}`.toLowerCase();

      if (aProp > bProp) {
        return 1 * order;
      }

      if (aProp < bProp) {
        return -1 * order;
      }

      return 0;
    });
  }
  static byPropertyDate<U>(
    items: U[],
    property: string,
    orderType = OrderType.ASC
  ) {
    const order = orderType === OrderType.ASC ? 1 : -1;

    return items.sort((a: U, b: U) => {
      const aProp = new Date(`${a[property as keyof U]}`);
      const bProp = new Date(`${b[property as keyof U]}`);

      return order * (+aProp - +bProp);
    });
  }
}
