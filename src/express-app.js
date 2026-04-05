const {userAPI, recordAPI, summaryAPI, authAPI} = require('./routes')

module.exports = (app) => {
    userAPI(app)
    recordAPI(app)
    summaryAPI(app)
    authAPI(app)
}