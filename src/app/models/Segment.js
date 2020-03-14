import { Model, Sequelize } from 'sequelize';

class Segment extends Model {
  static init(sequelize) {
    super.init(
      {
        primary: Sequelize.STRING,
        secondary: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Enterprise, { foreignKey: 'enterprise_id' });
  }
}

export default Segment;
