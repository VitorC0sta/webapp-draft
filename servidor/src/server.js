require('dotenv').config();
require('./infra/database/connection');
require('express-async-errors');

const cors = require('cors');
const express = require('express');
const cron = require('node-cron');
const routes = require('./routes.js');
const AppError = require('./infra/utils/AppError.js');
const eventTrigger = require('./cron-jobs/eventTrigger.job.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

cron.schedule("30-45 30 12 * * *", async () => await eventTrigger());

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
