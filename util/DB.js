const mongoose = require('mongoose')
// mongodb://127.0.0.1:27017/<dbname>
const uri = "mongodb+srv://mainHost:admin@cluster0.wt01dxv.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0"

const dbConnection = async() => {
    const connection = await mongoose.connect(uri)
    console.log("Db connected successfully!");
    return connection;
}

module.exports = dbConnection