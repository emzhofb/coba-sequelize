const models = require('./models')

models.Daerah.findOne({
    where: {
        nama: 'Bandung'
    }
}).then(daerah => {
    daerah.destroy()
}).then(daerah => {
    console.log('data daerah terhapus')
}).catch(err => console.log(err))