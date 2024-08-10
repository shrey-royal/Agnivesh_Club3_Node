const express = require('express');
const app = express();

const PORT = 3000


var users = [
    {
        id: 1,
        name: "Agnivesh",
        age: 20,
    },
    {
        id: 2,
        name: "Meet",
        age: 21,
    },
    {
        id: 3,
        name: "Suresh",
        age: 18,
    },
    {
        id: 4,
        name: "Ramesh",
        age: 25,
    },
]

app.get("/user", (req, res) => {
    // console.log("User get api called!");
    // res.json({
    //     name: "agnivesh",
    //     age: 20,
    // })

    res.status(200).json({
        data: users,
        message: "User list fetched successfully!",
    })
})


// fetching user using wildcard parameter
// :id => dynamic/wildcard parameter
app.get("/user/:id", (req, res) => {
    const user = users.find((u) => req.params.id == u.id)
    if(user != undefined || user != null) {
        res.status(200).json({
            data: user,
            message: "User fetched successfully!",
        })
    } else {
        res.status(404).json({
            message: "User not found",
        })
    }
})

app.get("/", (req, res) => {
    res.json({
        message: "Home Page"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})