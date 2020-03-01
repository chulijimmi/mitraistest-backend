import Database from '../classes/Database'

/**
 * Signup Process
 * @param {Object} body
 * reserved error code response
 * 201 Mobile phone number is exist or duplicate
 * 202 Email address is exist or duplicate
 */

export const signup = async (body, table='users') => {
    try {
        const db = new Database();
        const data = {
            mobileNumber: body.mobileNumber,
            firstName: body.firstName,
            lastName: body.lastName,
            dob: body.dob,
            gender: body.gender,
            email: body.email
        }

        const sqlCheckMobile = `SELECT mobileNumber from ${table} where mobileNumber = '${data.mobileNumber}'`;
        const sqlCheckEmail = `SELECT email from ${table} where email = '${data.email}'`;
        const query = `INSERT into ${table} 
                        (mobileNumber, firstName, lastName, dob, gender, email) 
                        values ('${data.mobileNumber}', '${data.firstName}', '${data.lastName}', '${data.dob}', ${data.gender}, '${data.email}')`;
        
        const isExistMobilePhone = await db.runQuery(sqlCheckMobile)
        if (isExistMobilePhone.length > 0) {
            return { error: 201, success: false, message: `${data.mobileNumber} is exist, plase use another`};
        }

        const isExistEmail = await db.runQuery(sqlCheckEmail)
        if(isExistEmail.length > 0) {
            return { error: 202, success: false, message: `Your email ${data.email} is not available`};
        }

        const response = await db.runQuery(query);
        data.id = response.insertId
        return { error: 0, success: true, data };
    } catch (error) {
        return `error ${error.code} ${error.sqlMessage}`;
    }
}

/**
 * This function use only in test
 * @param {Object} payload 
 */
export const removeInitializeData = async (payload) => {
    try {
        const db = new Database()
        const query = `DELETE from users where mobileNumber = '${payload.mobileNumber}' AND email = '${payload.email}'`;
        const response = await db.runQuery(query);
        await db.close();
        return { error: 0, success: true, data: response}
    } catch (error) {
        return `error ${error.code} ${error.sqlMessage}`;
    }
}

/**
 * This function use only in test
 * @param {Object} payload 
 */
export const getInitializationData = async () => {
    try {
        const db = new Database()
        const query = `SELECT mobileNumber, firstName, lastName, dob, gender, email from users order by id asc limit 1`;
        const response = await db.runQuery(query);
        await db.close();
        return { error: 0, success: true, data: response }
    } catch (error) {
        return `error ${error.code} ${error.sqlMessage}`;
    }
}