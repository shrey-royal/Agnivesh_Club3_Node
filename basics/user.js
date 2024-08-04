const userData = () => {
    console.log("Hello from user.js");
}

const add = (a, b) => {
    return a+b
}

const users = [
    {
        id: 1, 
        userName: "Agnivesh",
        age: 20,
    },
    {
        id: 2,
        userName: "Marmik",
        age: 20,
    }
]

const getUserById = (id) => {
    return users.find((user) => user.id === id)
}

module.exports = {
    userData, 
    add,
    getUserById
}