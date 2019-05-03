const request = require('request')
const FahrenheitToCelsius = require('./FahrenheitToCelsius.js')


const forecast = (latitude, longitude , callback)=>{

    const url = 'https://api.darksky.net/forecast/ae163efcf1b05643717bfa79756b7b6c/' + latitude + ',' + longitude
    request({url, json: true}, (error, {body})=>{
        if(error){
            callback("Can not get data!", undefined)
        }
        else if(body.error){
            callback("Can find this location!", undefined)
        }
        else{
            const dataFromWeather = body.currently
            callback(undefined, {
                temperature: FahrenheitToCelsius(dataFromWeather.temperature).toFixed(2),
                rainPossibility: dataFromWeather.precipProbability
            })
        }
    })
}

module.exports = forecast