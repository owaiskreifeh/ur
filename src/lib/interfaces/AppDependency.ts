export interface AppDependency {
  name: String;
  getInstance: Function;
  isSingleton: Boolean;
}
