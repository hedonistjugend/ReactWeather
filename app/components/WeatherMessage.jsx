var React = require('react');

// var WeatherMessage = (props) => {
//     var {location, temp} = props; //destructuring 
var WeatherMessage = ({location, temp}) => {
    return (
        <p>Temperature in {location} is {temp}</p>
    );
};

module.exports = WeatherMessage;
