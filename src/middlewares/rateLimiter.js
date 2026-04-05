const rateLimiter = require('express-rate-limit')

const limiter = rateLimiter({
    windowMs: 15*60*1000,
    max: 100,
    message: {
        message: 'too many request, try again later'
    },
    standardHeaders : true,
    legacyHeaders: true
})

module.exports = limiter 