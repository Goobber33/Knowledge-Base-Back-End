const mongoose = require('mongoose');

const connectDB = async () => {
    try {

        // Connect to the MongoDB database

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);

        // Exit process with failure

        process.exit(1);
    }
};

module.exports = { connect: connectDB };
