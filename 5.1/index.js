const express = require('express')
const connectDB = require('./db/db')
const { createProduct,getProducts} =require('./controllers/product.controller')
const app = express()
const port = 3000
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/products',createProduct)
app.get('/products',getProducts)


app.listen(port, () => {
  connectDB();
  console.log(`server running at http://localhost:${port}`)
})
