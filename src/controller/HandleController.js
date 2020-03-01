/**
 * Stack Error Handling related class express it self
 * @param {Class} req 
 * @param {Class} res 
 * @param {Function} callback 
 */
async function HandleController (req, res, callback) {
    let jsonResponse = {
        error: 0,
        message: '',
        body: req.body,
        stack: {}
    }

    try {
        const model = await callback(req.body)
        res.json(model);
    } catch (error) {
        jsonResponse.error = error.code
        jsonResponse.stack = error.stack
        jsonResponse.message = error.message
        res.json(jsonResponse)
    }
}

module.exports = HandleController