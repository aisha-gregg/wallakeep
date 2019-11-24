import { Advert } from "./Advert";

export class AdvertRepository {
  async findAll() {
    const result = await fetch("http://localhost:8080/apiv1/anuncios");
    const response = await result.json();
    const backendAdverts = response.results;
    const adverts = [];
    for (let i = 0; i < backendAdverts.length; i++) {
      const advert = Advert.fromBackend(backendAdverts[i]);
      adverts.push(advert);
    }
    return adverts;
  }
}
