import React from 'react';

const WeatherInfo = props => {
    return (
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {
            props.temperature ?
            <form className="card card-body">
                <p>
                    Location: {props.city},{props.country}
                </p>
                <p>
                    Temperature: {props.temperature} °C
                </p>
                <p>
                    Description: {props.description}
                </p>
                <p>
                    Humidity: {props.humidity}
                </p>
                <p>
                    Wind Speed: {props.wind_speed}
                </p>
            </form>
            :
            <form className="card card-body">
                <p>
                    No request yet
                </p>
            </form>

            }
        </div>
        
    )
}

export default WeatherInfo;