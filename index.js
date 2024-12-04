const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Require the cors package
const app = express();
const port = 3001;
const hardcodedResponseTest = true;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

app.post('/api/llm', async (req, res) => {
  try {
    if (hardcodedResponseTest) {
      const hardcodedResponse = { message: 'This is a hardcoded response' };
      res.json(hardcodedResponse);
    } else {
      const response = await axios.post('http://localhost:5000/', req.body);
      res.json(response.data);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Backend API listening at http://localhost:${port}`);
});
