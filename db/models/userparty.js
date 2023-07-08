'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserParty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserParty.init({
    userId: DataTypes.INTEGER,
    partyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserParty',
  });
  return UserParty;
};