const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/a4e419be-777d-11ee-b962-0242ac120002jm-queries');

module.exports = mongoose.connection;