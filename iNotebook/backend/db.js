const mongoose = require ('mongoose');
const mongoURI = 'mongodb://localhost:27017/'


const connectToMongo = () => {
    mongoose.connect(mongoURI , ()=>{
        console.log('connected today to mongo')
    })
}

mongoose.set('strictQuery', true);

module.exports = connectToMongo;