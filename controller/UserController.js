const userModel = require('../models/UserModel');

const getAllUsersFromDB = async(req, res) => {
    const users = await userModel.find()
    res.status(200).json({
        message: "Users list",
        data: users
    })
}

const getUserById = async(req, res) => {
    const user = await userModel.findById(req.params.id);

    if(user != undefined || user != null) {
        res.status(200).json({
            data: user,
            message: "User fetched successfully",
        })
    } else {
        res.status(404).json({
            message: "No user found",
        })
    }
}

const addUser = async(req, res) => {
    const user = req.body;
    if(user.name == undefined || user.email == undefined || user.age == undefined || user.status == undefined) {
        res.status(404).json({
            message: "data is not correct"
        })
    } else {
        const saveUser = await userModel.create(req.body);

        res.status(201).json({
            message: "success",
            data: saveUser
        })
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const deletedUser = await userModel.findByIdAndDelete(id);
    console.log("deletedUser", deletedUser)

    if(deletedUser && deletedUser != null) {
        res.status(200).json({
            message: "user deleted successfully",
            data: deletedUser
        })
    } else {
        res.status(400).json({
            message: "user not found"
        })
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const userData = req.body;

    const updatedUser = await userModel.findByIdAndUpdate(id, userData);

    res.status(200).json({
        message: "User updated successfully",
        data: updatedUser
    })
}

const getUserByAge = async (req, res) => {
    const age = req.params.age;

    const usersByAge = await userModel.find({ age: { $gte: age } });
    if(usersByAge && usersByAge.length > 0) {
        req.status(200).json({
            message: "users filters by Age",
            data: usersByAge
        })
    } else {
        res.status(400).json({
            message: "no user found"
        })
    }
}

module.exports = {
    getAllUsersFromDB,
    getUserById,
    addUser,
    deleteUser,
    updateUser,
    getUserByAge
}