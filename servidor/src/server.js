require('./infra/database/connection');
require('express-async-errors');
require('dotenv').config();

const express = require('express');
const routes = require('./routes.js');
const AppError = require('./infra/utils/AppError.js');

const app = express();

app.use(express.json());

app.use(routes);

app.use((err, req, res, nxt) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message:
      process.env.NODE_ENV == 'development' ? err.message : 'internal error',
  });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log('Server status :: [ONLINE].:'));
