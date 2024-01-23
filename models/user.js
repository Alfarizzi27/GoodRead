'use strict';

const bcrypt = require('bcryptjs');

const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Email must be unique"
      },
      validate: {
        notNull: {
          msg: "Email is required"
        },
        notEmpty: {
          msg: "Email is required"
        },
        isEmail: {
          msg: "Wrong email format"
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Username is required"
        },
        notEmpty: {
          msg: "Username is required"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password is required"
        },
        notEmpty: {
          msg: "Password is required"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user) => {
    const hashPassword = bcrypt.hashSync(user.password, 8)
    user.password = hashPassword
  })

  return User;
};