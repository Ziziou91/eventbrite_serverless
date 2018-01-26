const request = require('request');
const moment = require('moment');
const async = require('async');
const waterfall = async.waterfall;
//const waterfall = require('async').waterfall();
const logger = require('log4js').getLogger();

const accessToken = 'LLT34WZO55ZRRSJLZ6ZT';
const eventUrl = `https://www.eventbriteapi.com/v3/events/?token=${accessToken}`;

const output = (logger) => {
    waterfall([
        (done) => {
            fetch(request, eventUrl, done);
        }
    ])
    console.log('hello');
    
}
// const fetch = (url, cb) => {
//     return cb(new Error())
// }
console.log(output());
