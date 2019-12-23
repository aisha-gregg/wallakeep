export class AdvertRepositoryFactory {
  mock = undefined;

  static create() {
    if (this.mock !== undefined) {
      this.mock = {
        create: jest.fn(),
        update: jest.fn(),
        findOne: jest.fn(),
        findAll: jest.fn()
      };
    }

    return this.mock;
  }
}
