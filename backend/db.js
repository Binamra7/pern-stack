const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: "7777",
    host: 'localhost',
    port: 5432,
    database: 'firstpern'

});

module.exports = pool;