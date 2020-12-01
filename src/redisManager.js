const redis = require('redis')
const { promisify } = require("util")
const redisClient = redis.createClient() //we are assuming that the CLI runs on the same machine as the redis server
const getAsync = promisify(redisClient.get).bind(redisClient) //redis doesn't return promise by default

const timeHelper = require('./timeHelper')

let self = module.exports = {
    putPage: function(pageNum, page){
        const now = timeHelper.getCurrentTimeInfo()
        redisClient.set(pageNum, JSON.stringify(page))
        redisClient.expire(pageNum, constants.SECONDS_IN_HOUR - (now.minute * 60 + now.second))
    },
    getPage: async function(pageNum){
        return JSON.parse(await getAsync(pageNum))
    }
}



