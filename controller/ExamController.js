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
    try {
        const exams = await examSchema.find().populate("questions");
        if (exams && exams.length > 0) {
            res.status(200).json({
                message: "All Exams",
                data: exams,
            });
        } else {
            res.status(200).json({
                message: "No exams found",
                data: [],
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

const addQuestionToExam = async (req, res) => {
    const examId = req.params.examId;
    const questionId = req.params.questionId;

    try {
        const exam = await examSchema.findByIdAndUpdate(examId, {
            $push: { questions: questionId },
        });

        res.status(200).json({
            message: "Question added to exam",
            data: exam,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createExam,
    getAllExams,
    addQuestionToExam,
};