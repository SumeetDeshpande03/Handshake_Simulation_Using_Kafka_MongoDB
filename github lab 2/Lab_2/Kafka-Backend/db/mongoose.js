const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sumeet:Pass@123@handshakelab2-zyla2.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})