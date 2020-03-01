import express from 'express'
import { signup } from '../models/UserModel'
import HandleController from './HandleController'

//Signup Controller
const signupController = express.Router();

signupController.post('/', async (req, res) => {
    HandleController(req, res, async (callback) => {
        return signup(callback)
    })
})

const authController = express.Router();

authController.get('/', (req, res, next) => {
    res.json({ error: 404, message: 'You can access this page'})
})

authController.use('/signup', signupController);



module.exports = authController