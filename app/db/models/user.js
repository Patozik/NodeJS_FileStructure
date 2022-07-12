const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { checkForbidenString } = require('../validators');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true , 'Pole name jest wymagane'],
        minLength: [3 , 'Pole name musi mieć minimum 3 znaki'],
        validate: value => checkForbidenString(value, 'name')
    },
    email: {
        type: String,
        required: [true , 'Pole email jest wymagane'],
        trim: true,
        lowercase: true,
    },
    age: {
        type: Number,
        min: 1,
        default: 1,
    }
});

//setter
//userSchema.path('email').set((value) => value.toLowerCase());


const User = mongoose.model('User', userSchema);

module.exports = User;