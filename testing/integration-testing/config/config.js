// 3rd party libraries
const dotenv = require("dotenv")
const path = require('path')
dotenv.config({ path: path.join(__dirname, './config.env') })
const mongoose = require("mongoose");



function getEnv(name) {
  const val = process.env[name];
  if (!val) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return val;
}
// env setup
const DEFAULT_DB = getEnv('DB_NAME')
const env = getEnv('NODE_ENV') ;
const mongoBaseUrl = getEnv('MONGODB_URI')

const dbname = env ==='testing' ? `${DEFAULT_DB}-test` : DEFAULT_DB
if(env === 'testing'){
Object.assign(process.env, {
  PORT: 5000
})
}
const mongoUrl = `${mongoBaseUrl}${dbname}?retryWrites=true&w=majority&appName=Cluster0`;


// database connection
mongoose
  .connect(mongoUrl, {
    authSource: "admin",
  })
  .then(() =>
    console.log(`connected successfully to DB: ${dbname}`)
  )
  .catch((error) => console.log(`failed to connect to DB: ${error}`));

module.exports = {
  getEnv,
  mongoose
}