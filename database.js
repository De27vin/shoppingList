const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'einkaufsliste.xyz',
  user: 'der_admin', 
  password: 'Af,+9ef03c7%8', 
  database: 'einkaufsliste_db',
  connectionLimit: 5
});

module.exports = pool;
