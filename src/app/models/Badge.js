import { Model, Sequelize } from 'sequelize';

class Badge extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        profile_image: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Badge;
