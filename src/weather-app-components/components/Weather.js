import React from "react";
import PropTypes from 'prop-types';

const Weather = (props) => {
    return (
        <div>
            {props.city && <p>Location: {props.city}, {props.country}</p>}
            {props.temperature && <p>Temperature: {props.temperature}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.description && <p>Conditions: {props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    );
}

Weather.propTypes = {
    city: PropTypes.string,
    country: PropTypes.string,
    temperature: PropTypes.number,
    humidity: PropTypes.number,
    description: PropTypes.string,
    error: PropTypes.string
}

export default Weather;


