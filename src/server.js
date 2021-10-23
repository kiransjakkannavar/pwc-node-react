const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const corsHeader = require('./middleware/corsHeader');
const error = require('./middleware/error');
const router = require('./api/routes');

const app = express();

// Don't send server app information in api response
app.disable('x-powered-by');

// Use CORS
app.use(cors());
app.options('*', cors());

// Setting up basic middleware for all Express requests
app.use(morgan('combined'));

// parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());

// Enable CORS from client-side
app.use(corsHeader);

// Add routes
router(app);

// Error handler
app.use(error);

module.exports = app;
