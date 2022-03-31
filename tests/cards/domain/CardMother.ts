import { Card } from "../../../src/pages/cards/domain";
import MotherCreator from "../../MotherCreator";

export class CardMother {
  static random() {
    return new Card(
      MotherCreator.uuid(),
      MotherCreator.word(),
      MotherCreator.word(),
      MotherCreator.word(),
      MotherCreator.word()
    );
  }
}
