const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

exports.authMiddleware = (req, res, next) => {
    try{
        const header = req.headers.authorization 
        if(!header){
            return res.status(401).json({message: 'unauthorized user'})
                }
        const token = header.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user= decoded 
        next()
    } catch (error){
        console.log('There was an error in auth middleware', error)
        return res.status(401).json({
            message: 'invalid or expired token'
        })
    }
}