export class Advert {
  constructor({
    id,
    name,
    image,
    price,
    tags,
    type,
    description,
    publicationDate,
    updatedAt
  }) {
    this.id = id;
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

  static create({ id, name, image, price, tags, type, description }) {
    return new Advert({
      id,
      name,
      image,
      price,
      tags,
      type,
      description,
      publicationDate: new Date(),
      updatedAt: new Date()
    });
  }

  static fromBackend({
    createdAt,
    description,
    name,
    photo,
    price,
    tags,
    type,
    updatedAt,
    _id
  }) {
    return new Advert({
      id: _id,
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

  toJson() {
    return {
      name: this.name,
      photo: this.image,
      price: this.price,
      tags: this.tags.map(tag => tag.value),
      type: this.type,
      description: this.description,
      publicationDate: this.publicationDate,
      updatedAt: this.updatedAt
    };
  }
}
