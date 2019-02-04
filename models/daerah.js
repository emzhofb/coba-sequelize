'use strict';
module.exports = (sequelize, DataTypes) => {
  const Daerah = sequelize.define('Daerah', {
    nama: DataTypes.STRING
  }, {});
  Daerah.associate = function(models) {
    // associations can be defined here
    Daerah.hasMany(sequelize.models.User)
  };
  return Daerah;
};