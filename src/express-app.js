const {userAPI, recordAPI, summaryAPI} = require('./routes')

module.exports = (app) => {
    userAPI(app)
    recordAPI(app)
    summaryAPI(app)
}