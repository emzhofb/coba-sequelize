const models = require('./models')

models.Daerah.findAll({include: [{model: models.User}]}).then(daerahs => {
    daerahs.forEach(daerah => {
        console.log(`Daerah: ${daerah.nama}`)
        console.log(`Usernya: ${daerah.Users.map(user => user.nama).join(', ')}`)
    });
}).catch(err => console.log(err))