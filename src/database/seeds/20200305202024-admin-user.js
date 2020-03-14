const bcrypt = require('bcryptjs');

module.exports = {
  up: async queryInterface => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'admin',
        email: 'uchoa.emmanuel@gmail.com',
        password_hash: await bcrypt.hash('admin', 8),
        provider: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: queryInterface => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
