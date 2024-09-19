const questionModel = require("../models/QuestionModel");

const createQuestion = async (req, res) => {
    try {
        const savedQuestion = await questionModel.create(req.body);
        if (savedQuestion) {
            res.status(201).json({
                message: "Question created successfully.",
                data: savedQuestion,
            });
        } else {
            res.status(500).json({
                message: "error while saving question!"
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "error while saving question",
            error: err,
        });
    }
};

const getAllQuestions = async (req, res) => {
    try {
        const question = await questionModel.find();
        if (question && question.length > 0) {
            res.status(200).json({
                message: "All Questions",
                data: question,
            });
        } else {
            res.status(200).json({
                message: "No question found",
                data: [],
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

module.exports = {
    createQuestion,
    getAllQuestions
}