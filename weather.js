var Keys = require('./schemas/keys.js');
var fs = require('fs');
var moment = require('moment');
var http = require('http');
var weatherKey;
exports.conditions = function (req, res) {
    Keys.find({key: 'weatherKey'}, function (err, key) {
        if (!Array.isArray(key)) key = [key];
        var weatherKey = key[0].value;

        fs.access('cache.json', fs.F_OK, function (err) {
            if (err) {
                var emptyCache = {
                    conditions: {
                        data: {},
                        timestamp: '1234'
                    },
                    forecast: {
                        data: {},
                        timestamp: '1234'
                    }
                };
                fs.writeFileSync('cache.json', JSON.stringify(emptyCache, null, 4), 'utf-8');
            }
            
            fs.readFile('cache.json', 'utf-8', function (err, data) {
                var readError = false;
                if (err) readError = true;

                var jsonObj;
                try { // error handling for JSON.parse
                    jsonObj = JSON.parse(data);
                } catch (e) {
                    readError = true;
                }

                var now = moment().unix(),
                    conTimestamp = readError ? false : parseInt(jsonObj.conditions.timestamp),
                    cachedConditions = readError ? false : jsonObj.conditions.data;
                if (!conTimestamp || !cachedConditions || now - conTimestamp >= 900) { // if timestamp doesn't exist or timestamp from cache is more than 15 minutes old
                    http.get('http://api.wunderground.com/api/' + weatherKey + '/geolookup/conditions/q/TX/Manor.json')
                        .on('response', function (response) {
                            var statusCode = response.statusCode;
                            var body = '',
                                i = 0,
                                resError = false;

                            if (statusCode !== 200) resError = true; // check for no response and handle error


                            response.on('error', function (err) {
                                resError = true;
                            });

                            response.on('data', function (chunk) {
                                if (!resError) {
                                    i++;
                                    body += chunk;                            
                                }
                            });
                            response.on('end', function () {
                                try {
                                    body = JSON.parse(body);                            
                                } catch (e) {
                                    resError = true;
                                }

                                if (!resError) {
                                    jsonObj.conditions.data = body;
                                    jsonObj.conditions.timestamp = now.toString();
                                    fs.writeFileSync('cache.json', JSON.stringify(jsonObj, null, 4), 'utf-8');                            
                                }

                                if(body) res.json(body);
                                else res.json({error: true});
                            });
                        });
                } else {
                    res.json(cachedConditions);
                }
            });
        });
    });
};