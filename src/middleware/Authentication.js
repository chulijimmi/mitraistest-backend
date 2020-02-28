/**
 * Simple authentication use verify token
 */
const verify = (token) => {
    if(token === '123456') return token;
    return false;
}

module.exports = async (req, res, next) => {
    if (req.headers['Authorization'] && verify(req.headers['Authorization'])) {
        next()
    } else {
        res.sendStatus(401)
    }
}