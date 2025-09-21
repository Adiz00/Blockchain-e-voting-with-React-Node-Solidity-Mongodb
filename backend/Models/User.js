const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;

// {
//     name: "admin",
//     email: "zB3P0@example.com", 
//     password: "admin"
//     userType: "voter"
//     userType: "candidate" 
// }