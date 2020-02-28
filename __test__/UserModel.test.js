import regeneratorRuntime from 'regenerator-runtime'
import Database from '../src/classes/Database'
import { signup, removeInitializeData, getInitializationData } from '../src/models/UserModel'
import moment from 'moment'

const randomNumber = Math.floor(100000000 + Math.random() * 900000000);

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
    mobileNumber: randomNumber.toString(),
    firstName: 'Chuli',
    lastName: 'Jimmi',
    dob: moment(new Date()).format('YYYY-MM-DD hh:mm:ss'),
    gender: 1,
    email: `${emailAddress}@gmail.com`
}

test(`Should display error if table doesn't exist, create now !!`, async () => {
    const model = await signup(users, 'user');
    expect(model).toMatch('error');
})

test(`Test only once initialize data`, async () => {
    const model = await signup(users);
    await removeInitializeData(users);
    expect(model).toBeTruthy();
})

afterAll( async (done) => {
    const db = new Database();
    db.close();
    done();
});