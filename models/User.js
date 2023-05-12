
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 10],
      },
    },
  },
  {//options for our table; hook used to hash new and updated user pw's before table is rendered//
    hooks: {
      beforeCreate: async (newPassword) => {
        newPassword.password = await bcrypt.hash(newPassword.password, saltRounds);
        return newPassword;
      },
      beforeUpdate: async (updatedPassword) => {
        updatedPassword.password = await bcrypt.hash(updatedPassword.password, saltRounds)
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
  }
);

module.exports = User;