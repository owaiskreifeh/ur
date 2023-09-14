import {Cuisine} from '../interfaces/Cuisine';
import {Database} from '../interfaces/Database';
import {CuisineModel} from '../models/CuisineModel';

import data from './mock.json';

export class MockDatabase implements Database {
  static _instance: MockDatabase = new MockDatabase();

  private mockData: Array<Cuisine>;

  vendor: String = 'MOCK';
  name: String = 'database';
  isSingleton: Boolean = true;

  private constructor() {
    this.mockData = data.cuisines.map(
      c => new CuisineModel(c.food_type, c.origin, c.vegan, c.icon),
    );
  }

  getInstance(): MockDatabase {
    return MockDatabase._instance;
  }

  findByID(id: number): Cuisine {
    return this.mockData[id];
  }

  query(_queryString: String): any {
    throw new Error('Not implemented');
  }
}
