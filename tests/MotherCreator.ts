import faker from "faker";

export default class MotherCreator {
  static word() {
    return faker.lorem.word();
  }

  static uuid() {
    return faker.datatype.uuid();
  }
}
