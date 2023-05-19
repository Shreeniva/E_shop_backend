const config = require('./db_config.json');
require('dotenv').config();

const ENV_MODE = process.env.MODE;
const port = config[ENV_MODE]["port"];
const host = config[ENV_MODE]["host"];
const db_host = config[ENV_MODE]["db_host"];
const db_user = config[ENV_MODE]["db_user"];
const db_password = config[ENV_MODE]["db_password"];
const db_name = config[ENV_MODE]["db_name"];
const timezone = config[ENV_MODE]["timezone"];

module.exports = {
   port,host, db_host,db_user, db_password, db_name
}
