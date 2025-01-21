/*In your Express program, parsing refers to the process of converting
 the incoming HTTP request body into a JavaScript object that can be easily accessed via req.body. 
This is achieved using the body-parser middleware*/ 


// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

// Routes

// GET route
app.get('/', (req, res) => {
  res.send('Welcome to the Express Backend!');
});

// POST route
app.post('/data', (req, res) => {
  const { name, email } = req.body; // Extract data from the request body
  res.json({
    message: 'Data received successfully!',
    receivedData: {
      name,
      email
    }
  });
});

// PUT route
app.put('/data/:id', (req, res) => {
  const id = req.params.id; // Extract ID from URL
  const updatedData = req.body; // Extract updated data from the request body
  res.json({
    message: `Data with ID ${id} updated successfully!`,
    updatedData
  });
});

// DELETE route
app.delete('/data/:id', (req, res) => {
  const id = req.params.id; // Extract ID from URL
  res.json({
    message: `Data with ID ${id} deleted successfully!`
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
