import { Tag } from "./Tag";

export class TagRepository {
  static url = "http://localhost:8080/apiv1/tags";

  async findAll() {
    const result = await fetch(TagRepository.url);
    const response = await result.json();
    const backendTags = response.results;
    const tags = [];
    for (let i = 0; i < backendTags.length; i++) {
      if (backendTags[i] === null) {
        continue;
      }
      const tag = Tag.fromBackend(backendTags[i]);
      tags.push(tag);
    }
    return tags;
  }
}
