import { Advert } from "./Advert";

export class AdvertRepository {
  static url = "http://localhost:8080/apiv1/anuncios";

  async findAll() {
    const result = await fetch(AdvertRepository.url);
    const response = await result.json();
    const backendAdverts = response.results;
    const adverts = [];
    for (let i = 0; i < backendAdverts.length; i++) {
      const advert = Advert.fromBackend(backendAdverts[i]);
      adverts.push(advert);
    }
    return adverts;
  }

  async findOne(id) {
    const result = await fetch(`${AdvertRepository.url}/${id}`);
    const response = await result.json();
    const backendAdvert = response.result;
    return Advert.fromBackend(backendAdvert);
  }
}