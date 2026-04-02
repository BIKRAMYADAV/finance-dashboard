exports.authMiddleware = (req, res, next) => {
    try {
        req.user = {
            id: 'user-1',
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