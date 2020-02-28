import express from 'express'
import { signup } from '../models/UserModel'

//Signup Controller
const signupController = express.Router();

signupController.post('/', async (req, res, next) => {
    const result = await signup(req.body);
    res.json(result);
})

const authController = express.Router();

authController.get('/', (req, res, next) => {
    res.json({ error: 404, message: 'You can access this page'})
})

authController.use('/signup', signupController);



module.exports = authController