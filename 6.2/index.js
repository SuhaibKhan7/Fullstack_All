const express = require('express')
const dbConnect = require('./db/db')
const { registerUser, loginUser } = require('./controllers/register.controller')
const { authVerify } = require('./middleware/auth.middleware')
const{ checkBalance, depositAmount } = require('./controllers/account.controller')
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Home Page')
})
app.post('/register', registerUser)
app.post('/login', loginUser)
app.get('/balance', authVerify, checkBalance)
app.post('/deposit',authVerify,depositAmount)

app.listen(port, () => {
    dbConnect();
  console.log(`Example app listening on port ${port}`)
})
