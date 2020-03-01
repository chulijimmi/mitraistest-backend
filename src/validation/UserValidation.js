/**
 * Validation mobileNumber to check input from request.
 * will product false if first 5 digits not equal with
 * available code key inside mobileCode arr
 * @param {String} mobileNumber 
 */
export const validateMobileNumber = (mobileNumber) => {
    const mobileCode = [
        { code: 62895, company: '3tree'},
        { code: 62896, company: '3tree'},
        { code: 62897, company: '3tree'},
        { code: 62898, company: '3tree'},
        { code: 62899, company: '3tree'},
        { code: 62881, company: 'smartfren'},
        { code: 62882, company: 'smartfren'},
        { code: 62883, company: 'smartfren'},
        { code: 62884, company: 'smartfren'},
        { code: 62885, company: 'smartfren'},
        { code: 62886, company: 'smartfren'},
        { code: 62887, company: 'smartfren'},
        { code: 62888, company: 'smartfren'},
        { code: 62889, company: 'smartfren'},
        { code: 62827, company: 'net1'},
        { code: 62828, company: 'net1'},
        { code: 62831, company: 'axis'},
        { code: 62832, company: 'axis'},
        { code: 62833, company: 'axis'},
        { code: 62838, company: 'axis'},
        { code: 62817, company: 'indosat'},
        { code: 62818, company: 'indosat'},
        { code: 62819, company: 'indosat'},
        { code: 62859, company: 'indosat'},
        { code: 62877, company: 'indosat'},
        { code: 62878, company: 'indosat'},
        { code: 62811, company: 'telkomsel'},
        { code: 62812, company: 'telkomsel'},
        { code: 62813, company: 'telkomsel'},
        { code: 62851, company: 'telkomsel'},
        { code: 62852, company: 'telkomsel'},
        { code: 62853, company: 'telkomsel'},
        { code: 62821, company: 'telkomsel'},
        { code: 62822, company: 'telkomsel'},
        { code: 62823, company: 'telkomsel'}
    ];

    if (mobileNumber.substr(0, 2) !== '62') return false;

    let isValid = false;

    for (let i = 0; i < mobileCode.length; i++) {
        const a = mobileCode[i].code.toString().substr(0, 5);
        const b = mobileNumber.substr(0, 5);
        if (a == b) isValid = true;
    }

    return isValid
}

export const checkIsRequireRegister = (payload) => {
    if (payload.mobileNumber == '') {
        return {
            error: 201,
            message: 'Mobile number is required'
        }
    }

    else if (payload.firstName == '') {
        return {
            isValid: 202,
            message: 'First name is required'
        }
    }

    else if (payload.lastName == '') {
        return {
            isValid: 203,
            message: 'Last name is required'
        }
    }

    else if (payload.email == '') {
        return {
            error: 204,
            message: 'Email is required and should valid email address'
        }
    }

    else return { error: 0, message: 'Success'}
}