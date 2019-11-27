const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://user:1234@cluster0-tsgii.mongodb.net/test?retryWrites=true&w=majority'

const openConnection = () => mongoose.connect(connectionString, { useNewUrlParser: true })

module.exports = {
    openConnection,
}