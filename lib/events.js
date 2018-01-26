const request = require('request');
const moment = require('moment');
const async = require('async');
const waterfall = async.waterfall;
//const waterfall = require('async').waterfall();
const logger = require('log4js').getLogger();

const accessToken = 'LLT34WZO55ZRRSJLZ6ZT';
const eventUrl = `https://www.eventbriteapi.com/v3/users/me/owned_events/?token=${accessToken}`;

const output = (logger) => {
    waterfall([
        (done) => {
            fetch(request, eventUrl, done);
        }
    ],
   (err) => {
       if (err) {
         console.log('error');
    }
    else {console.log('success')};
    } 
)

    
}
const fetch = (request, url, next) => {
    request(eventUrl, function(err, res, body) {
        if (err) {
            return done(err);
        }
        body = JSON.parse(body);
        const courses = body.events.filter(event => {
            let startTimeStamp = Date.parse(event.start.local);
            let eventTimeFromNow = moment().diff(startTimeStamp, Date.now());
            return eventTimeFromNow < 0 
        })
        console.log(courses.length);
    })
    return next(new Error());
}
output();
//console.log(moment().format());
