export class Tag {
  constructor({ value }) {
    this.value = value;
  }

  static fromBackend(tag) {
    return new Tag({ value: tag });
  }
}
