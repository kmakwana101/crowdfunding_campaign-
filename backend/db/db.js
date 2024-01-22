let mongoose = require('mongoose')


const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/foundTask');
        console.log('Connected !');

    } catch (error) {
        console.log("mongoose connection fail...");
    }
}

module.exports = connectDb