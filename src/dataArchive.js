const bent = require('bent')
const constants = require('./constants')
const queryPathBuilder = require('./queryPathBuilder')
const redisManager = require('./redisManager')

let self = module.exports = {
    getData: async function(pageNum){
        //check redis first, if not in redis, get data from source, update redis
        let data = await self.getDataFromCache(pageNum)
        if(data === null){
            data = await self.getDataFromSource(pageNum)
        }
        return data
    },
    getDataFromSource: async function (pageNum) {
        const offset = (pageNum - 1) * 10
        const query = queryPathBuilder.constructQueryPath(offset)
        const getJSON = bent('GET', 'json')
        const data = await getJSON(query, {
                    'X-App-Token': constants.APP_TOKEN,
        })
        redisManager.putPage(pageNum, data)
        return data
    },
    getDataFromCache: async function(pageNum) {
        return await redisManager.getPage(pageNum)
    }
}

