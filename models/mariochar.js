const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const mario = new Schema(
    {
        name:String,
        weight:Number
    }
)

const MarioModel = mongoose.model('mariochar',mario);

module.exports= MarioModel;