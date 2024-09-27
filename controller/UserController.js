const UserModel = require('../models/UserModel');
const userModel = require('../models/UserModel');
const encrypt = require('../util/encrypt');
const tokenUtil = require('../util/token');

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
    const hashedPassword = encrypt.encryptPassword(req.body.password);
    const userObject = Object.assign(req.body, {
        password: hashedPassword
    });

    const saveUser = await userModel.create(userObject);

    res.status(201).json({
        message: "success",
        data: saveUser
    })
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

const loginUser = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        // console.log("email", email);
        // console.log("password", password);

        const emailFromUser = await userModel.findOne({ email: email });
        
        if(emailFromUser) {
            const isPasswordMatched = encrypt.comparePassword(password, emailFromUser.password);

            if (isPasswordMatched == true) {
                const token = tokenUtil.generateToken(emailFromUser.toObject());
                res.status(200).json({
                    message: "Login Success",
                    // data: emailFromUser,
                    data: token,
                });
            } else {
                res.status(400).json({
                    message: "Invalid Password"
                });
            }
        } else {
            res.status(404).json({
                message: "User Not Found"
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err
        });
    }
}

module.exports = {
    getAllUsersFromDB,
    getUserById,
    addUser,
    deleteUser,
    updateUser,
    getUserByAge,
    loginUser
}