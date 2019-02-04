const models = require('./models')

models.User.findAll({include: [{model: models.Daerah}]}).then(users => {
    users.forEach(user => {
        console.log(`${user.nama} | ${user.email} | ${user.alamat} | ${user.telp} | Daerah: ${user.Daerah.nama}`)
    });
}).catch(err => console.log(err))