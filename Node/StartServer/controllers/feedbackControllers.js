const feedbackModel = require("../models/feedbackModel");

async function getFeedbackById(req, res) {
    const {id}= req.params;
    try{
        const description = await feedbackModel.getFeedbackById(id);
        res.status(200).json(description);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

async function createFeedback(req, res) {
    try {
        const {user_id} = req.params;
        const {feedback} = req.body;

        const newFeedback = await feedbackModel.createFeedback(feedback, user_id);
        res.status(200).json(newFeedback);

    }catch(error){
        console.log(error);
    }
}

module.exports = {getFeedbackById, createFeedback};
