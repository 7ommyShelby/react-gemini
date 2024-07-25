// node --version # Should be >= 18
// npm install @google/generative-ai

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai"


// const MODEL_NAME = "gemini-1.0-pro";


async function runChat(prompt) {
    
    const API_KEY = import.meta.env.VITE_APP_TOKEN;
    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });


    // const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    // const generationConfig = {
    //     temperature: 0.9,
    //     topK: 1,
    //     topP: 1,
    //     maxOutputTokens: 2048,
    // };

    const generationConfig = {
        temperature: null,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    // const chat = model.startChat({
    //     generationConfig,
    //     safetySettings,
    //     history: [
    //     ],
    // });

    const chatSession = model.startChat({
        generationConfig,
        safetySettings,
        
        history: [
        ],
    })

    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    // console.log(response.text());
    return response.text()
}

export default runChat;