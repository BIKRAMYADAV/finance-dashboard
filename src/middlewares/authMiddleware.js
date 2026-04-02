exports.authMiddleware = (req, res, next) => {
    try {
        req.user = {
            id: '69ce81e4c6ea33f11b00d42d',
            role:'admin'
        }
        next()
    } catch (error){
        console.log('auth middleware error', error)
        return res.status(500).json({
            message: 'server error'
        })
    }
}