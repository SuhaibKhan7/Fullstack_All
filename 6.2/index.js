const express = require('express');
const cors = require('cors');
const dbConnect = require('./db/db');
const { registerUser, loginUser } = require('./controllers/register.controller');
const { authVerify } = require('./middleware/auth.middleware');
const { checkBalance, depositAmount } = require('./controllers/account.controller');

const app = express();
const port = 3000;

// ✅ Enable CORS for React frontend
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// ✅ Parse incoming JSON
app.use(express.json());

// ✅ Basic route
app.get('/', (req, res) => {
  res.send('Home Page');
});

// ✅ Your app routes
app.post('/register', registerUser);
app.post('/login', loginUser);
app.get('/balance', authVerify, checkBalance);
app.post('/deposit', authVerify, depositAmount);

// ✅ 404 handler
// app.use((req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

// ✅ Start server
app.listen(port, () => {
  dbConnect();
  console.log(`🚀 Server running on http://localhost:${port}`);
});