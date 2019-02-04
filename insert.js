const models = require('./models')

models.User.create({
    nama: 'haidar',
    email: 'haidar@gmail.com',
    alamat: 'bandung',
    telp: 2320
}).then(user => {
    console.log('berhasil memasukkan data user',user.nama)
}).catch(err => console.log(err))