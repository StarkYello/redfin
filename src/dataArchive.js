const request = require('request');
const redisManager = require('/src/redisManager')
const constants = require('/constants')
const timeHelper = require('src/timeHelper')

request('http://data.sfgov.org/resource/bbb8-hzi6.json', function (error, response, body) {
    console.log(body);
});