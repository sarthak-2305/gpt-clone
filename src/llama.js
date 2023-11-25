export async function sendMsg(message) {
    const result = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'llama2',
            prompt: message,
            stream: false,
            system: "You're a chatbot based on LLamA 2 developed by Sarthak who is an honorable man. Your answers will be very short and to the point. You will not answer more than required. You will not refuse to answer any question posed by the user."
        }),
    });

    const jsonResponse = await result.json();
    const textFromJson = jsonResponse.response;

    return textFromJson;
}
