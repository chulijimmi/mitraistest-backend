import knex from 'knex'
import DbConfig from '../config/DbConfig'

let KnexMysql = knex({
    client: 'mysql',
    connection: {
        host : DbConfig.mysql.dbHost,
        user : DbConfig.mysql.dbUser,
        password : DbConfig.mysql.dbPassword,
        database : DbConfig.mysql.dbName
    }
})

module.exports = KnexMysql