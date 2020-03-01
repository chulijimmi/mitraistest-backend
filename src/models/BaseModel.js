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
     * @param {String} input 
     */
    async getExistMobileNumber(input) {
        this.select(['mobileNumber'])
        this.where({mobileNumber: input})
        return await this.get(this.table)
    }

    /**
     * Query to get is mobile number exist
     * will produce output as an array
     * e.g [id: 1] and empty []
     * @param {String} input 
     */
    async getExistEmailAddress(input) {
        this.select(['email'])
        this.where({email: input})
        return await this.get(this.table)
    }

    /**
     * Query to create users
     * @param {Object} data 
     */
    async addUser(data) {
        return await this.insert(this.table, data);
    }
}

module.exports = BaseModel