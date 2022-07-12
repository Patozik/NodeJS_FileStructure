const mongoose = require('mongoose');
const { database } = require('../config');


const User = require('./models/user');

mongoose.connect(database);


async function main() {
    // const user = await User.find({});
    // console.log(user);

    // const user = new User({
    //     name: 'Patryk',
    //     email: 'patryk@email.com',
    //     age: 25,
    // });

    // try {
    //     await user.save();
    // } catch (err) {
    //     console.log('Coś poszło nie tak');
    //     console.log(err.message);
    // }
}

main();