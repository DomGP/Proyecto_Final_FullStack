require('dotenv').config()
const { reject } = require('bcrypt/promises')
const {Pool} = require('pg')
const { password, port, ssl } = require('pg/lib/defaults')


const pool = new Pool ({

    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false,
    },
})

module.exports = pool;