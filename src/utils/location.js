const request = require('request')

const location = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/99af5e7654f4c9066993bb0636d37403/'+ latitude + ',' + longitude

    request( { url, json: true }, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather services!', undefined)
        }else if(body.error){
            console.log('Unable to find location', undefined)
        }else{
            const data = body;
            callback(undefined, data.hourly.summary + 'It is currently ' + data.currently.temperature + ' degree out. This high today is ' + data.daily.data[0].temperatureHigh + ' with a low of ' + data.daily.data[0].temperatureLow + '. There is a ' + data.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = location