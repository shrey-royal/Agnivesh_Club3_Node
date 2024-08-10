const express = require('express');
const app = express();
const PORT = 3000
const dbConnection = require('./util/DB')
dbConnection();

const userModel = require('./models/UserModel')

app.get("/users", async(req, res) => {
    const users = await userModel.find()
    res.status(200).json({
        message: "Users list",
        data: users
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})