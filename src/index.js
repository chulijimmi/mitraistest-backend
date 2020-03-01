import express from 'express';
import cors from 'cors';
import favicon from 'express-favicon';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import ServerConfig from './config/ServerConfig';
import Authentication from './middleware/Authentication';
import AuthController from './controller/AuthController';

/**
 * Node Listen Ip Address & Port
 */
let app = express()
let port = ServerConfig.port

/**
 * Logic of express middleware
 */
app.use(helmet())
app.use(bodyParser.json())
app.use(cors())
app.use(favicon('favicon.png'));
app.use('/', (req, res, next) => {
    try {
        next()
    } catch (error) {
        
    }
})
app.use('/auth', AuthController)
app.get('/test', (req, res, next) => {
    res.json({error: 100, message: 'test'})
})
app.use('/api/v1', Authentication)
app.use('/', (req, res, next) => {
    res.json({
        error: 500,
        message: 'Method not found'
    })
})

app.listen(port, () => {
    console.log(`Express server listening on port ${process.env.PORT}!!`);
})