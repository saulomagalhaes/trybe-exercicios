const connection = require('./connection');

const UserModel = {
  login: async (username) => {
    const query = 'SELECT user_name AS username, password, admin FROM DB.users WHERE user_name = ?';
    const [[result]] = await connection.query(query, [username]);
    return result;
  },
};

module.exports = UserModel;