const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

app.get('/hello', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running at http://192.168.33.10:${port}`);
});
//done
