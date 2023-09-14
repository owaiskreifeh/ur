import {AppDependency} from './AppDependency';

export interface Database extends AppDependency {
  vendor: String;
  query: (queryString: String) => any;
  findByID: (id: number) => Object;
}
