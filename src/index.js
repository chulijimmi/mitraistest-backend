import express from 'express';
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
app.use(favicon('favicon.png'));
app.use('/', (req, res, next) => {
    try {
        next()
    } catch (error) {
        
    }
})
app.use('/auth', AuthController)
app.use('/api/v1', Authentication)

app.listen(port, () => {
    console.log(`Express server listening on port ${process.env.PORT}!!`);
})