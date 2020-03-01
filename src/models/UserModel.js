import Database from '../classes/Database'
import BaseModel from './BaseModel'
import { validateMobileNumber, checkIsRequireRegister } from '../validation/UserValidation'
/**
 * Signup Process
 * @param {Object} body
 * reserved error code response
 * 201 Mobile phone number is required,
 * will check is exist and should valid indonesian number
 * 202 First name is required
 * 203 Last name is required
 * 204 Email is require,
 * will check email address is exist
 */

export const signup = async (body) => {
    const payload = {
        mobileNumber: body.mobileNumber,
        firstName: body.firstName,
        lastName: body.lastName,
        dob: body.dob,
        gender: body.gender,
        email: body.email
    }

    const isRequire = checkIsRequireRegister(payload)
    if (isRequire.error !== 0) return isRequire;
    
    const db = new BaseModel('users');

    const isValidMobileNumber = validateMobileNumber(payload.mobileNumber);
    if (!isValidMobileNumber)
        return { 
            error: 201, 
            success: false, 
            message: `Please enter valid indonesian mobile number`
        };

    const isMobileNumberExist = await db.getExistMobileNumber(body.mobileNumber);
    if (isMobileNumberExist.length > 0)
        return { 
            error: 201, 
            success: false, 
            message: `${body.mobileNumber} is exist, plase use another`
        };
    
    const isEmailExist = await db.getExistEmailAddress(body.email);
    if (isEmailExist.length > 0)
        return {
            error: 202,
            success: false,
            message: `Your email ${body.email} is not available`
        }
    
    const createUser = await db.addUser(payload);

    return {
        error: 0,
        success: true,
        data: createUser
    }
}