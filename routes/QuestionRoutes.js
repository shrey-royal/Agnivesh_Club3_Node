const questionController = require('../controller/QuestionController');
const router = require('express').Router();

router.post('/', questionController.createQuestion);
router.get('/', questionController.getAllQuestions);

module.exports = router;