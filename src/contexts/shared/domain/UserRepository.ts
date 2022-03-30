import Http from "../infra/Http";
import User from "./User";

export default class AuthRepository {
  private static baseUrl = `${process.env.API_URL}`;

  static async findToken() {
    const response = await Http.get<string>(`${AuthRepository.baseUrl}/users`);

    return new User(response.data);
  }
}
