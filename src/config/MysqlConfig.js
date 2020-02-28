module.exports = {
    development: {
        username: 'developer',
        password: 'developer',
        database: 'mitrais_dev',
        host: '192.168.10.10',
        dialect: 'mysql'
    },
    test: {
        username: process.env.TEST_DB_USERNAME,
        password: process.env.TEST_DB_PASSWORD,
        database: process.env.TEST_DB_NAME,
        host: process.env.TEST_DB_HOST,
        dialect: 'mysql'
    },
    production: {
        username: process.env.PRODUCTION_DB_USERNAME,
        password: process.env.PRODUCTION_DB_PASSWORD,
        database: process.env.PRODUCTION_DB_NAME,
        host: process.env.PRODUCTION_DB_HOST,
        dialect: 'mysql'
    }
}