const employeeModel = require("../models/EmployeeModel")

const createEmployee = async (req, res) => {
    try {
        const createdEmployee = await employeeModel.create(req.body);
        res.status(201).json({
            message: "Employee created successfully",
            data: createdEmployee
        })
    } catch (err) {
        res.status(500).json({
            message: "Error",
            data: err
        })
    }
}

const getAllEmployees = async (req, res)=> {
    try {
        const employees = await employeeModel.find();
        res.status(200).json({
            message: "employees list",
            data: employees
        })
    } catch (err) {
        res.status(500).json({
            message: "Error in fetching employees",
            data: err
        })
    }
}

module.exports = {
    createEmployee,
    getAllEmployees
}