const mongoose = require('mongoose');

const connection = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/NexaNovadb');
        if (conn) {
            console.log("Connected to MongoDB");
        }
    } catch (err) {
        console.error(err);
    }
};

module.exports = connection;


