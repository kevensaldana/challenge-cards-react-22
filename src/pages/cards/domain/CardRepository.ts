import { Http } from "../../../http";
import Card from "./Card";
import { CardResponse } from "./definitions";

type CardItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  created: string;
};

export default class CardRepository {
  private static baseUrl = `${process.env.API_URL}/cards`;

  static async save(title: string, description: string, image: File | null) {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    const response = (
      await Http.post<CardResponse>(`${CardRepository.baseUrl}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    ).data;
    return new Card(
      response.id,
      title,
      description,
      response.imageUrl,
      response.created
    );
  }

  static async update(id: string, title: string, description: string) {
    const response = (
      await Http.put<CardResponse>(`${CardRepository.baseUrl}/${id}`, {
        title,
        description,
      })
    ).data;
    return new Card(
      id,
      title,
      description,
      response.imageUrl,
      response.created
    );
  }

  static async delete(id: string) {
    await Http.delete<string>(`${CardRepository.baseUrl}/${id}`);
  }

  static async findAll() {
    const response = (await Http.get<CardItem[]>(`${CardRepository.baseUrl}`))
      .data;
    return response.map(
      ({ id, title, description, imageUrl, created }) =>
        new Card(id, title, description, imageUrl, created)
    );
  }

  static async find(id: string) {
    const {
      id: cardItemId,
      title,
      description,
      imageUrl,
      created,
    } = (await Http.get<CardItem>(`${CardRepository.baseUrl}/${id}`)).data;

    return new Card(cardItemId, title, description, imageUrl, created);
  }
}
