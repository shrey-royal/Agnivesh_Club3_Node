const examSchema = require("../models/ExamModel")

const createExam = async (req, res) => {
    try {
        const savedExam = await examSchema.create(req.body);
        res.status(201).json({
            message: "Exam created successfully",
            data: savedExam
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

const getAllExams = async (req, res) => {
    //
}