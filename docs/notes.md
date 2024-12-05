post chat completion

curl -X POST http://localhost:5000/api/chat/completions \-H "Authorization: Bearer sk-f1ca6e7227174b6ca33a087f2e66d227" \-H "Content-Type: application/json" \-d '{"model": "CognitiveComputations/dolphin-llama3.1:latest", "messages": [{"role": "user","content": "Why is the sky blue?"}]}'
