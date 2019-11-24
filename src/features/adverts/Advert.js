export class Advert {
  constructor({
    name,
    image,
    price,
    tags,
    type,
    description,
    publicationDate,
    updatedAt
  }) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.tags = tags;
    this.type = type;
    this.description = description;
    this.publicationDate = publicationDate;
    this.updatedAt = updatedAt;
  }

  isSelling() {
    return this.type === "sell";
  }

  isBuying() {
    return this.type === "buy";
  }

  static fromBackend({
    createdAt,
    description,
    name,
    photo,
    price,
    tags,
    type,
    updatedAt
  }) {
    return new Advert({
      name,
      description,
      price,
      image: photo,
      tags,
      type,
      publicationDate: new Date(createdAt),
      updatedAt: new Date(updatedAt)
    });
  }
}
