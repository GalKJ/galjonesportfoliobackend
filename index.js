const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Require the cors package
const app = express();
const port = 3001;
const hardcodedResponseTest = true;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.post('/api/llm', async (req, res) => {
  console.log('Received POST request at /api/llm');
  try {
    if (hardcodedResponseTest) {
      const hardcodedResponse = { response: 'This is a hardcoded response' };
      res.json(hardcodedResponse);
    } else {
      console.log('Request to LLM:', req.body);
      const response = await axios.post(
        'http://localhost:5000/api/chat/completions',
        req.body
      );

      res.json(response.data);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Define the /error endpoint
app.get('/error', (req, res) => {
  res.status(500).send('This is a simulated error.');
});

app.listen(port, () => {
  console.log(`Backend API listening at http://localhost:${port}`);
});
