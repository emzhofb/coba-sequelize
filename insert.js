const models = require('./models')

models.User.create({
    nama: 'haidar',
    email: 'haidar@gmail.com',
    alamat: 'Jakarta Selatan',
    telp: 2320,
    daerahId: 3
}).then(user => {
    console.log('berhasil memasukkan data user',user.nama)
}).catch(err => console.log(err))