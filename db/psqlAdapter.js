const pgPromise = require('pg-promise');

const connStr = 'postgresql://postgres:Ideas0125*.@190.107.23.173:54322/Biometrico'; // add your psql details


const pgp = pgPromise({}); // empty pgPromise instance
const psql = pgp(connStr); // get connection to your db instance

exports.psql = psql;