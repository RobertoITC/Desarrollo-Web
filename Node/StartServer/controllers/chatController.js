require('dotenv').config();
const OpenAI = require('openai');

async function getResponseChat(req, res) {

    const {prompt}=req.body;
    const openai = new OpenAI(process.env.OPENAI_API_KEY);
    try{

    const stream=await openai.chat.completions.create({
        model:"gpt-3.5-turbo",
        messages:[
            {role:"system",content:"You are an expert Dungeon Master and can answer any question about Dungeons and Dragons in less than 800 characters"},
            {role:'user', content:prompt},
        ],
        stream:true,
    });

    let responseText='';
    for await (const chunk of stream){
        responseText += chunk.choices[0]?.delta?.content || '';
    }


    return res.json({response:responseText});
    }catch(error){
        console.error("Error en la comunicación con la API",error);
        res.status(500).send(error);

    }
}

module.exports = {getResponseChat};