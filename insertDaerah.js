const models = require('./models')

models.Daerah.create({
    nama: 'lampung',
}).then(daerah => {
    console.log('berhasil memasukkan data daerah',daerah.nama)
}).catch(err => console.log(err))