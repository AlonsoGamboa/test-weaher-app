import React, {Component} from 'react'
import WeatherInfo from './components/WeatherInfo'
import WeatherForm from './components/WeatherForm'

import {WEATHER_KEY} from './keys'

class App extends Component{

    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: '',
        city: '',
        country: '',
        error: null
    }

    getWeather=async e=>{
        //console.log("submiting")
        e.preventDefault();
        const {city, country} = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;
        
        if(!cityValue || !countryValue){
            this.setState({error: 'Please enter a city or country'})
        }
        const API_URL=`http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`
        const response=await fetch(API_URL);
        const data= await response.json();
        //console.log(data);
        console.log(this.state);


        this.setState({
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
            city: data.name,
            country: data.sys.country,
            error: null
        },()=>console.log(this.state));
        //console.log(cityValue,countryValue)
        
        //e.preventDefault(); se paso al inicio porque al hacer asincrono recargaba
    }

    render(){
        return(
       <div className="container p-4">
           <div className="row">
               <div className="col-md-6 mx-auto">
                    <WeatherForm getWeather={this.getWeather}/>
                    <WeatherInfo {...this.state}/>
               </div>
           </div>
       </div>
       )
    }
}

export default App;