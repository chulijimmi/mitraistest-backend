import mysql from 'mysql';
import DbConfig from '../config/DbConfig'

let Pool = mysql.createPool({
    connectionLimit : 10,
    host : DbConfig.mysql.dbHost,
    user : DbConfig.mysql.dbUser,
    password : DbConfig.mysql.dbPassword,
    database : DbConfig.mysql.dbName
})

module.exports = Pool