const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    age :{ 
        type : Number,
        required : true,

    },
    mobile :{
        type : String,
        

    },
    email : {
        type : String,
        unique  : true,
    },
    address:{
        type : String,
        required: true,

    },
    addharCardNumber : {
        type : Number,
        required : true,
        unique : true,
    },
    password: {
        type : String,
        required : true,

    },
    role :{
        type : String,
        enum : ['voter', 'admin'],
        default : 'voter'
    },
    isVoted: {
        type : Boolean,
        default : false,
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;