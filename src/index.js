const express = require('express');
const redirect = require('./controllers/redirects.controller');
const url = require('./controllers/url.controller');
var cors = require('cors');

const app = express();


// Array of allowed origins
const allowedOrigins = [
    "https://login-frontend-iota.vercel.app", 
    "http://localhost:5173" // Add your additional URL here
  ];
  
app.use(cors({
    origin: (origin, callback) => {
      // Check if the origin is in the allowed origins list or if there's no origin (for server-to-server requests)
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true
  }));

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ Message: 'Hi there' });
});

app.use('/', redirect);
app.use('/api/url', url);

module.exports = app;
