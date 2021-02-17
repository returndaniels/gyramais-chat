const mongoose = require('mongoose');

const databaseURL = process.env.MONGO_URI || 'mogodb://localhost/';

console.log(databaseURL)

mongoose.connect(databaseURL,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: true
    });
mongoose.Promise = global.Promise;

module.exports = mongoose;