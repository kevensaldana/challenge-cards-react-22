import { FormState } from "../components/Form/definitions";
import { CardProps } from "../components/Item";

export default class Card {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public imageUrl: string,
    public created: string
  ) {}

  toCardItem(): CardProps {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      image: this.imageUrl,
    };
  }

  toFormData(): FormState {
    return {
      title: this.title,
      description: this.description,
      image: null,
    };
  }
}
