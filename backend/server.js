require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const { getSheetPassword } = require('./googleSheets');

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true },
  })
);

// Restrict to iPhone user agents
app.use((req, res, next) => {
  const allowedDevice = /iPhone/i.test(req.headers['user-agent'] || '');
  if (!allowedDevice) return res.status(403).json({ message: 'Device not allowed' });
  next();
});

app.post('/login', async (req, res) => {
  const { password } = req.body;
  const sheetPassword = await getSheetPassword();

  if (password === sheetPassword) {
    req.session.authenticated = true;
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid password' });
  }
});

app.get('/protected-data', (req, res) => {
  if (req.session.authenticated) {
    res.json({ data: 'Secret info visible only after login' });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Backend running on port ${port}`));
