'use strict';
module.exports = (sequelize, DataTypes) => {
  const Daerah = sequelize.define('Daerah', {
    nama: DataTypes.STRING
  }, {});
  Daerah.associate = function(models) {
    // associations can be defined here
    Daerah.hasMany(sequelize.models.User)
  };
  Daerah.beforeCreate(daerah => {
    daerah.nama = daerah.nama.toUpperCase()
    return Daerah
  })

  Daerah.afterDestroy(daerah => {
    return sequelize.models.User.destroy({
      where: {
        daerahId: daerah.id
      }
    })
  })
  return Daerah;
};