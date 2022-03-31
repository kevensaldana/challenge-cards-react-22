import { User } from "../../src/domain";
import MotherCreator from "../MotherCreator";

export default class UserMother {
  static random() {
    return new User(MotherCreator.uuid());
  }
}
