'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
      this.hasMany(models.Party, { foreignKey: 'userId' });
      this.belongsToMany(models.Party, {through:models.UserParty, foreignKey: 'userId'});
    }
  }
  User.init({
    name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    hash: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};