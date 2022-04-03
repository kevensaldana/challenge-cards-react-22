export enum OrderType {
  ASC,
  DESC,
}

export interface Criteria {
  meetCriteria<T>(items: T[]): T[];
}

export interface Filter {
  name: string;
  filter: Criteria;
}
