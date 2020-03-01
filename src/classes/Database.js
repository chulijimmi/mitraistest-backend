import Pool from '../driver/PoolMysql'

/**
 * Database classes
 * Use to insert, delete, update of mysql database
 */
class Database {
    constructor() {
        this.connection = Pool
    }

    runQuery(sql) {
        return new Promise( (resolve, reject) => {
            this.connection.query( sql, (error, results) => {
                if (error) return reject (error);
                resolve(results)
            })
        })
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end( error => {
                if (error) return reject (error);
                resolve()
            });
        });
    }
}

module.exports = Database