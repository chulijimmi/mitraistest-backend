import KnexMysql from '../driver/KnexMysql'

class KnexDatabase {
    constructor() {
        this.connection = KnexMysql
        this.columnQry = [];
        this.whereQry = {}
        this.limitQry = 0
        this.outputQry = '*';
    }

    /**
     * This method use to produce returning query of insert
     * It could be string or an array
     * e.g 'id' will return last insert as {id: 1}
     * e.g ['id', 'email'] will return {id: 1, email: 'abc@mail.co'}
     * @param {Any} any 
     */
    setReturning(any) {
        this.outputQry = any;
        return any;
    }

    /**
     * Produce select argumenst should be an array
     * e.g ['mobileNumber', 'email']
     * @param {Array} args 
     */
    select(column) {
        this.columnQry = column
        return column;
    }

    /**
     * Where condition of query
     * e.g {id: 1}
     * @param {Object} condition 
     */
    where(condition) {
        this.whereQry = condition
        return condition;
    }

    /**
     * Get function to produce Qry data
     * from select `column` from `table` where `condition`
     * @param {String} tableName 
     */
    get(tableName) {
        try {
            return this.connection.column(this.columnQry).select().from(tableName).where(this.whereQry)
                .then(function(rows) {
                    return rows;
                })
                .catch(function(error) {
                    return error;
                })
        } catch (error) {
            return error;
        }
    }

    /**
     * Insert query, followed data as object
     * e.g { firstname: 'John', email: 'Doe' }
     * @param {String} tableName
     * @param {Object} data
     */
    insert(tableName, data) {
        try {
            return this.connection().insert(data).returning([...this.outputQry]).into(tableName)
                .then(function([id]){
                    return id
                })
                .catch(function(error) {
                    return error;
                })
        } catch (error) {
            return error;
        }
    }

    /**
     * By passing root class to knex it self
     * tableName should be not empty
     * @param {String} tableName
     */
    knex(tableName){
        try {
            return this.connection(tableName);
        } catch (error) {
            return error;
        }
    }
}

module.exports = KnexDatabase