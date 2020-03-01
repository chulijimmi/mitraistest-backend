import regeneratorRuntime from 'regenerator-runtime'
import { signup } from '../src/models/UserModel'
import BaseModel from '../src/models/BaseModel'
import { validateMobileNumber } from '../src/validation/UserValidation'
import moment from 'moment'

const randomNumber = Math.floor(10000000 + Math.random() * 90000000);

const randomEmail = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const emailAddress = randomEmail(5)

const users = {
    mobileNumber: `62812${randomNumber.toString()}`,
    firstName: 'Chuli',
    lastName: 'Jimmi',
    dob: moment(new Date()).format('YYYY-MM-DD hh:mm:ss'),
    gender: 1,
    email: `${emailAddress}@gmail.com`
}
//Success test case register
test(`Success registration should be positive number of id`, async () => {
    const model = await signup(users);
    expect(model.data > 0).toBeTruthy();
})

//Success show error if unique parameters exist
test(`Success test case show error if unique mobile number exist`, async () => {
    const db = new BaseModel('users')
    const model = await db.getExistMobileNumber(users.mobileNumber);
    expect(model.length).toBeGreaterThanOrEqual(1)
})

test(`Success test case show error if unique email address exist`, async () => {
    const db = new BaseModel('users')
    const model = await db.getExistEmailAddress(users.email);
    expect(model.length).toBeGreaterThanOrEqual(1)
})

//Remove users after test case running
test(`Delete users data after test success registration`, async () => {
    const db = new BaseModel('users')
    const model = await db.delUser(users.mobileNumber, users.email);
    expect(model).toBeTruthy();
})

//Validate success and failed indonesian mobile number
test(`Failed test case valid indonesian mobile number`, () => {
    const result = validateMobileNumber('6182917793');
    expect(result === false).toBeTruthy();
})

test(`Sucess test case validate indonesian mobile number`, () => {
    const result = validateMobileNumber(users.mobileNumber);
    expect(result).toBeTruthy();
})

//Success registration if unique parameters doesn't exist
test(`Registration approve for unique mobile number`, async () => {
    const db = new BaseModel('users')
    const model = await db.getExistMobileNumber(users.mobileNumber);
    expect(model.length == 0).toBeTruthy();
})

test(`Registration approve for unique email address`, async () => {
    const db = new BaseModel('users')
    const model = await db.getExistEmailAddress(users.email);
    expect(model.length == 0).toBeTruthy();
})
