var React = require('react');

var WeatherMessage = (props) => {
  return (
    <h3>It is {props.temp} in {props.location}</h3>
  );
};

module.exports = WeatherMessage;
