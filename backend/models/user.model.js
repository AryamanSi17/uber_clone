const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    fullname: {
        firstname:
        {
            type: String,
            required: true,
            minlength: [2, 'First name must be at least 2 characters long']
        },
        lastname:
        {
            type: String,
        }
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        required: true,
        select: false
    },
    socketId:
    {
        type: String,
    }
});

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET);
    return token;
}
userSchema.methods.comparePassword = async function (password) {    
    return await bcrypt.compare(password, this.password);
}//instance methods - specific to a particular object

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
} //static method - general purpose , can be used anywhere
module.exports = mongoose.model('User', userSchema);

