const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect('mongodb+srv://Talkative:PNGKsSnm27T7Rf0H@cluster0.4i3emg5.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log(`MongoDB connected Successfully`);
    } catch (error) {
        console.log(`Error Occured ${error.message}`);
        process.exit();
    }
}
module.exports = connectDB;