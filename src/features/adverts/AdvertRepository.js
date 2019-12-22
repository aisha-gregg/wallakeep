import { Advert } from "./Advert";

export class AdvertRepository {
  static url = "http://localhost:8080/apiv1/anuncios";

  async create(advert) {
    const fetchResponse = await fetch(AdvertRepository.url, {
      method: "POST",
      body: JSON.stringify(advert.toJson()),
      headers: { "Content-Type": "application/json" }
    });
    if (fetchResponse.status === 422) {
      throw new Error();
    }
  }

  async update(advert) {
    await fetch(`${AdvertRepository.url}/${advert.id}`, {
      method: "PUT",
      body: JSON.stringify(advert.toJson()),
      headers: { "Content-Type": "application/json" }
    });
  }

  async findAll({ articleName, minPrice, maxPrice, tag, type } = {}) {
    const url = new URL(AdvertRepository.url);
    const filteredParams = Object.fromEntries(
      Object.entries({
        name: articleName,
        price:
          minPrice !== undefined && maxPrice !== undefined
            ? minPrice + "-" + maxPrice
            : undefined,
        tag,
        venta: this._getType(type)
      }).filter(([key, value]) => {
        return value !== undefined && value !== "";
      })
    );

    url.search = new URLSearchParams(filteredParams).toString();

    const result = await fetch(url);
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

  _getType(type) {
    if (type === "all") {
      return undefined;
    }
    return type === "sell" ? true : false;
  }
}
