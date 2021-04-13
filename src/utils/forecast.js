const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=122dab59fbd41708048d623e41e35b6e&query=${longitude},${latitude}&units=m`;


    request({url, json: true}, (error, { body }) => {
        // console.log(response.body.current)
        if (error){
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]} - It is currently ${body.current.temperature} degrees out. There is a ${body.current.precip}% chance of rain.`);
        }
        
    });
}

module.exports = forecast;