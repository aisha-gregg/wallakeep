export const advertRepositoryFactoryMocks = {
  create: jest.fn(),
  update: jest.fn(),
  findOne: jest.fn(),
  findAll: jest.fn()
};

export const AdvertRepositoryFactory = {
  create() {
    return advertRepositoryFactoryMocks;
  }
};
