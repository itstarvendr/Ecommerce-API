const express = require('express');
const app = express();
const port = 3000; // Change this to the desired port number

app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
