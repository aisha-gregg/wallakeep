import { AdvertRepository } from "./AdvertRepository";

export class AdvertRepositoryFactory {
  static create() {
    return new AdvertRepository();
  }
}
