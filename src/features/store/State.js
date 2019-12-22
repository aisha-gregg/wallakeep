export class State {
  constructor({ user, adverts }) {
    this.user = user;
    this.adverts = adverts;
  }

  static empty() {
    return new State({ user: null, adverts: [] });
  }

  static preloaded({ user }) {
    return new State({ user, adverts: [] });
  }
}
