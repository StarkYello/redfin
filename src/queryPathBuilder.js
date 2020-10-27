const constants = require('./constants')
const timeHelper = require('./timeHelper')

let self = module.exports = {
    constructQueryPath: function(offset){
        const now = timeHelper.getCurrentTimeInfo()
        return constants.QUERY_TEMPLATE
            .replace("COLUMNS", constants.COLUMNS.join(','))
            .replace("DAYOFWEEK", now.dayOfWeek.toString())
            .replace("STARTHOUR", now.hour.toString())
            .replace("ENDHOUR", now.hour.toString())
            .replace("PRIMARYORDER", constants.PRIMARY_ORDER)
            .replace("LIMIT", constants.TRUCKS_PER_REQUEST_LIMIT.toString())
            .replace("OFFSET", offset)
    }
}