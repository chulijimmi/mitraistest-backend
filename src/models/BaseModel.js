import KnexDatabase from '../classes/KnexDatabase'

class BaseModel extends KnexDatabase {
    constructor(props) {
        super(props)
        this.table = props ? props : '';
    }

    /**
     * Query to get is mobile number exist
     * will produce output as an array
     * e.g [id: 1] and empty []
     * @param {String} mobileNumber 
     */
    async getExistMobileNumber(mobileNumber) {
        this.select(['mobileNumber'])
        this.where({mobileNumber})
        return await this.get(this.table)
    }

    /**
     * Query to get is mobile number exist
     * will produce output as an array
     * e.g [id: 1] and empty []
     * @param {String} email 
     */
    async getExistEmailAddress(email) {
        this.select(['email'])
        this.where({email})
        return await this.get(this.table)
    }

    /**
     * Query to create users
     * @param {Object} data 
     */
    async addUser(data) {
        return await this.insert(this.table, data);
    }

    /**
     * Delete user
     * @param {String} mobileNumber 
     * @param {String} email 
     */
    async delUser(mobileNumber, email) {
        try {
            return await
            this.knex(this.table).where('mobileNumber', mobileNumber).where('email', email).del()
                .then( function(result) {
                    return result;
                })
                .catch( function(error) {
                    return error;
                })
        } catch (error) {
            return error;
        }    
    }
}

module.exports = BaseModel