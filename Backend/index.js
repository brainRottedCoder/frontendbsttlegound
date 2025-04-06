const express = require('express');
const app = express();
const PORT = 3000;

app.get('/dhruv', (req, res) => {
  res.send('Hello from Express server!');
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
