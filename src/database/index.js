import Sequelize from 'sequelize';
import databaseConfig from '../configurations/DatabaseConfiguration';

import User from '../app/models/User';
import Enterprise from '../app/models/Enterprise';
import Badge from '../app/models/Badge';
import Segment from '../app/models/Segment';

const models = [User, Enterprise, Badge, Segment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(
        model =>
          model && model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
