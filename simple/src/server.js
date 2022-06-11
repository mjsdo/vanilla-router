const open = require('open');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const frontendPath = path.resolve(__dirname, '..', 'frontend');

app.use(('/', express.static(frontendPath)));

app.get('/*', (_, res) => {
  res.sendFile(path.resolve(frontendPath, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  open(`http://localhost:${port}`);
});
