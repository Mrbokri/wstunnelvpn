const WebSocket = require('ws');
const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello from the HTTP server!');
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Set up WebSocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log('Received message:', message);
    // Handle your custom payload processing here
  });

  ws.send('Welcome to the WebSocket server!');
});
