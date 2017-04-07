var React = require('react');

// var WeatherMessage = (props) => {
//     var {location, temp} = props; //destructuring
var WeatherMessage = ({location, temp}) => {
    return (
        <h3 className="text-center">Temperature in {location} is {temp}</h3>
    );
};

module.exports = WeatherMessage;
