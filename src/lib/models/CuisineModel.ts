import {Cuisine} from '../interfaces/Cuisine';

export class CuisineModel implements Cuisine {
  constructor(
    public foodType: string,
    public origin: string,
    public vegan: boolean,
    public icon: string,
  ) {}
}
