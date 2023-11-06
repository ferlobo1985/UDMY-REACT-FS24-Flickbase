const { User } = require('../models/user');
const httpStatus = require('http-status');

const findUserByEmail = async(email)=>{
    return await User.findOne({email});
}

const findUserById = async(_id)=>{
    return await User.findById(_id)
}


module.exports = {
    findUserByEmail,
    findUserById
}
