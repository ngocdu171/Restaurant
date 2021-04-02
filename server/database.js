'use strict';
const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb+srv://BrotherD:conmemay7@cluster0.jabiy.mongodb.net/db_restaurant?retryWrites=true&w=majority', {
        useNewUrlParser: true, useUnifiedTopology: true,
        useCreateIndex: true, useFindAndModify:true
    })
    .then(() => console.log('connected to mongodb!'))
    .catch((error) => console.log(error));
}