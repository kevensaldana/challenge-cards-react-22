import { Http } from "../http";
import User from "./User";

export default class UserRepository {
  private static baseUrl = `${process.env.API_URL}`;

  static async findToken() {
    const response = await Http.get<string>(`${UserRepository.baseUrl}/users`);

    return new User(response.data);
  }
}
