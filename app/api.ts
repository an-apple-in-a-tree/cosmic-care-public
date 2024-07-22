"use server";
import {FunctionDeclarationSchemaType, GoogleGenerativeAI} from "@google/generative-ai";
import {promises as fs} from 'fs';
import path from 'path';

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_API_KEY || '';
if (!apiKey) {
    console.error('API key is not defined. Please check your environment variables.');
}

const genAI = new GoogleGenerativeAI(apiKey);

export const fetchTips = async (journalEntry: string) => {
    console.log("fetching it...")
    const promptPath = path.join(process.cwd(), '/app/geminiPrompt.txt');
    let promptTemplate = await fs.readFile(promptPath, 'utf8');

    let model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
                type: FunctionDeclarationSchemaType.ARRAY,
                items: {
                    type: FunctionDeclarationSchemaType.OBJECT,
                    properties: {
                        suggestion_name: {
                            type: FunctionDeclarationSchemaType.STRING,
                        },
                        suggestion_description: {
                            type: FunctionDeclarationSchemaType.STRING,
                        },
                    },
                },
            },
        }
    });

    const prompt = `${promptTemplate}
        ${journalEntry}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
};
/*
*/