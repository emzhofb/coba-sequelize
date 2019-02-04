const models = require('./models')

models.User.findAll().then(users => {
    users.forEach(user => {
        console.log(`${user.nama} | ${user.email} | ${user.alamat} | ${user.telp}`)
    });
}).catch(err => console.log(err))