import {MockDatabase} from '../db/MockDatabase';
import {AppDependency} from '../interfaces/AppDependency';
import {Database} from '../interfaces/Database';

export class AppDependencyException extends Error {
  constructor(public message: string, public stack?: string) {
    super(`AppDependencyException: ${message}`);
  }
}

class AppContainer {
  constructor(private appDependencies: [AppDependency]) {}

  getInstanceOfDependence(name: String): AppDependency {
    const appDependency = this.appDependencies.find(dep => dep.name === name);
    if (!appDependency) {
      throw new AppDependencyException(
        `Could not find dependency with name: ${name}`,
      );
    }

    return appDependency.getInstance();
  }

  getDatabase(): Database {
    return this.getInstanceOfDependence('database') as Database;
  }
}

const appDependencies: [AppDependency] = [MockDatabase._instance];

export const appContainer = new AppContainer(appDependencies);
