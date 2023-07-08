const express = require('express');
const db = require('./db/models');
require('@babel/register');

const serverConfig = require('./config/server-config');

const apiRouter = require('./routes/api/index.routes');
const viewsRouter = require('./routes/views/index.routes');
const app = express();
const PORT = 3000;

serverConfig(app);

app.use('/api', apiRouter);
app.use('/', viewsRouter);

app.listen(PORT, async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');

    console.log(`Server start on port: ${PORT}`);
  } catch (e) {
    console.log(e);
  }
});