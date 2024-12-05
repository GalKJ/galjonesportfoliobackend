const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;
const hardcodedResponseTest = false; // Set to false to forward requests
const apiKey = 'sk-f1ca6e7227174b6ca33a087f2e66d227';

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
        req.body,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
      res.json(response.data);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Backend API listening at http://localhost:${port}`);
});
