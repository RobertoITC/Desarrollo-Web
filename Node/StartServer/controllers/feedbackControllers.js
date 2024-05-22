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

module.exports = {getFeedbackById};