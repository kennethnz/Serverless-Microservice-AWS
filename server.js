const express = require('express');
const os = require('os');
const app = express();
const port = 8080;

// A simple list of programming jokes
const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "There are 10 types of people in the world: those who understand binary, and those who don't.",
    "I would tell you a UDP joke, but you might not get it."
];

app.get('/', (req, res) => {
    // Get the unique ID of the container
    const containerId = os.hostname();
    
    // Pick a random joke from the list
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    
    res.send(`
        <div style="font-family: sans-serif; text-align: center; margin-top: 50px;">
            <h1>😂 The Random Joke API</h1>
            <p style="font-size: 1.5em; font-style: italic;">"${randomJoke}"</p>
            
            <hr style="max-width: 400px; margin: 30px auto;">
            
            <div style="padding: 15px; background-color: #f0f0f0; border-radius: 8px; display: inline-block;">
                <p style="margin: 0;"><strong>Served by Container ID:</strong> <code style="color: #d6336c; font-size: 1.2em;">${containerId}</code></p>
                <p style="margin: 5px 0 0 0; font-size: 0.9em; color: #555;">(Refresh the page on AWS to watch this ID change!)</p>
            </div>
        </div>
    `);
});

// AWS needs this to verify the container hasn't crashed
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(port, () => {
    console.log(`Joke app running on http://localhost:${port}`);
});