const cron = require('node-cron');
const { sync_db } = require('./tasks/sync-db');
console.log("inicio de la aplicación");

cron.schedule('1-59/5 * * * * *', sync_db);
