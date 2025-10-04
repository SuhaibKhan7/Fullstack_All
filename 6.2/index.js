const express = require('express')
const dbConnect = require('./db/db')
const {registerUser}=require('./controllers/register.controller')
const app = express()
const port = 3000

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/register',registerUser)

app.listen(port, () => {
    dbConnect();
  console.log(`Example app listening on port ${port}`)
})
