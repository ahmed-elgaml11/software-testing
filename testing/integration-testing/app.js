const express = require('express');
const { getEnv } = require('./config/config')
// own files
const restRouter = require('./src/api/api-routes');

// create app instance and get port
const app = express();
const PORT = getEnv('PORT');
NODE_ENV = getEnv('NODE_ENV');

app.use(express.urlencoded())
app.use(express.json())
// map the app routes
app.use('/api/v1', restRouter);

// bind app to the PORT
const server = app.listen(PORT, () => {
  console.log(
    `app is up and running in the ${NODE_ENV} mode on port ${PORT}`
  );
});

module.exports = server
