import Groq from "groq-sdk";

const groqClient = () => new Groq({
    apiKey: process.env.GROQ_API_KEY || "dummy-key-for-build",
});

export async function getGroqChatCompletion(
    messages: Groq.Chat.Completions.ChatCompletionMessageParam[]
) {
    const groq = groqClient();
    return await groq.chat.completions.create({
        model: "openai/gpt-oss-120b", // OpenAI GPT-OSS 120B via Groq
        messages,
        temperature: 0.7,
        tool_choice: "auto",
        tools: [
            {
                type: "function",
                function: {
                    name: "getOverview",
                    description: "Provides a welcome message and explains what Aditya Verma’s portfolio assistant can help with.",
                },
            },
            {
                type: "function",
                function: {
                    name: "getSkillsOverview",
                    description: "Returns Aditya Verma’s backend-focused technical skills, including Node.js, AWS, and Databases.",
                },
            },
            {
                type: "function",
                function: {
                    name: "getExperienceOverview",
                    description: "Gives an overview of Aditya Verma’s backend engineering experience and infrastructure focus.",
                },
            },
            {
                type: "function",
                function: {
                    name: "getProjectsOverview",
                    description: "Lists Aditya Verma’s featured backend projects such as DevSync, Aura Music, and VideoTube.",
                },
            },
            {
                type: "function",
                function: {
                    name: "getDevSyncDetails",
                    description: "Provides detailed information about the DevSync project including WebSockets, AWS EC2, PM2, and Real-Time features.",
                },
            },
            {
                type: "function",
                function: {
                    name: "getContactInfo",
                    description: "Returns ways to contact Aditya Verma including GitHub, LinkedIn, portfolio website, and resume access.",
                },
            },
            {
                type: "function",
                function: {
                    name: "getGitHubStats",
                    description: "Explains Aditya Verma’s GitHub activity, LeetCode stats, and production code traffic.",
                },
            },
            {
                type: "function",
                function: {
                    name: "getArchitectureOverview",
                    description: "Describes backend architecture concepts used by Aditya Verma such as AWS EC2 deployments, JWT, and PM2.",
                },
            },
            {
                type: "function",
                function: {
                    name: "getEducationOverview",
                    description: "Provides an overview of Aditya Verma’s education including college, degree, CGPA, and academic background.",
                },
            },
        ],
    });
}
