'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Party extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {foreignKey: "userId"});
      this.belongsToMany(models.User, {through:models.UserParty, foreignKey: 'partyId'})
    }
  }
  Party.init({
    name: DataTypes.TEXT,
    time: DataTypes.DATE,
    location: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Party',
  });
  return Party;
};