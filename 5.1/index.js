const express = require('express');
const connectDB = require('./db/db');
const { 
  createProduct, 
  getProducts, 
  getProductById, 
  updateProduct, 
  deleteProduct 
} = require('./controllers/product.controller');

const app = express();
const port = 3000;

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Product routes
app.post('/products', createProduct);      // Create
app.get('/products', getProducts);         // Get all
app.get('/products/:id', getProductById);  // Get one by ID
app.put('/products/:id', updateProduct);   // Update by ID
app.delete('/products/:id', deleteProduct);// Delete by ID

// Start server
app.listen(port, () => {
  connectDB();
  console.log(`Server running at http://localhost:${port}`);
});