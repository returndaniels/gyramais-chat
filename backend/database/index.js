const mongoose = require('mongoose');

const databaseURL = process.env.MONGO_URI || 'mogodb://localhost/[name]';

mongoose.connect(databaseURL, { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;