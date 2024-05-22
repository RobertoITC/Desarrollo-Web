const { GoogleGenerativeAI } = require("@google/generative-ai");
const res = require("express/lib/response");

require("dotenv").config();

async function getResponseGemini(req, res) {
    const {prompt}=req.body;
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    try{
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return res.json({response:text});
    }catch(error){
        console.log(error);
    }

};

module.exports = {getResponseGemini};