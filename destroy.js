const models = require('./models')

models.User.destroy({
    where: {
        nama: 'Budi'
    }
}).then(user => {
    console.log('berhasil hapus data')
}).catch(err => console.log(err))