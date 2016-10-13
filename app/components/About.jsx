var React = require('react');

var About = (props) =>  {
    return (
      <div>
        <h1 className= "text-center page-title">About</h1>
        <p>This is a weather application build in React</p>
        <ol>
          <li>
            <a href = "https://github.com/rramakr/ReactWeather"> GitRepo </a>
          </li>
          <li>
            <a href = "https://openweathermap.org/"> Weather served by OpenWeatherApp</a>
          </li>
        </ol>
      </div>
    );
};

module.exports = About;
