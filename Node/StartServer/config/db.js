const Pool = require('pg').Pool;
const db = new Pool({
    user:'rob',
    password:'password',
    host:'localhost',
    port:5432,
    database:'robapi',


});

module.exports = {db};

