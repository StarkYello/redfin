const luxonDateTime = require('luxon').DateTime
const constants = require('./constants')

let self = module.exports = {
    getCurrentTimeInfo: function() {
        const now = luxonDateTime.local()
        const sfTime = luxonDateTime.fromISO(now.toISO(), {zone: constants.TIME_ZONE_SF})
        return {
            "dayOfWeek": sfTime.weekday,
            "hour": sfTime.hour,
            "minute": sfTime.minute,
            "second": sfTime.second
        }
    }
}
