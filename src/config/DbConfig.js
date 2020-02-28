import MysqlConfig from './MysqlConfig';

module.exports = {
    mysql: {
        dbHost: `${process.env.DATABASE_HOST || MysqlConfig.development.host}`,
        dbUser: `${process.env.DATABASE_USERNAME || MysqlConfig.development.username}`,
        dbPassword: `${process.env.DATABASE_PASSWORD || MysqlConfig.development.password}`,
        dbName: `${process.env.DATABASE_NAME || MysqlConfig.development.database}`
    }
}