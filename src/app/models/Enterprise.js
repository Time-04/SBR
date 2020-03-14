import { Model, Sequelize } from 'sequelize';

class Enterprise extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        startupbase_id: Sequelize.STRING,
        slug: Sequelize.STRING,
        tags: Sequelize.STRING,
        employees: Sequelize.STRING,
        business_phase: Sequelize.STRING,
        business_model: Sequelize.STRING,
        uf: Sequelize.STRING,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
        place: Sequelize.STRING,
        segment: Sequelize.STRING,
        is_verified: Sequelize.BOOLEAN,
        is_active: Sequelize.BOOLEAN,
        founded_at: Sequelize.BOOLEAN,
      },
      { sequelize }
    );

    return this;
  }
}
export default Enterprise;
