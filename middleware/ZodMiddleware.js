const validateSchema = (schema) => async(req, res, next) => {
    try {
        await schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params
        });

        next();
    } catch(err) {
        res.status(400).json({
            message: err
        });
    }
}

module.exports = {
    validateSchema
}