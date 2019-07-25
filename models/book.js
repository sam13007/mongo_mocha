const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const book = new Schema({
    name:String,
    pages:Number
})

const author = new Schema({
    name:String,
    books:[book]
})

const authormodel = new model('authors',author);

module.exports=authormodel