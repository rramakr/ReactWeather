var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var getWeatherMap = require('getWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },

  handleSearch: function (location) {
    var self = this;

    this.setState ({
        isLoading: true
    });
    debugger

    getWeatherMap.getTemp(location).then(function (temp) {
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      });

    }, function (error) {
      self.setState ({
          isLoading: false
      });

      alert(error);
    });
  },

  render: function () {
    var {location, temp, isLoading} = this.state;
    var renderMessage = function () {
      if (isLoading) {
        return <h3>Fetching Weather....</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp= {temp}/>;
      }
    }

    return (
      <div>
        <h2>Weather Component</h2>
        <WeatherForm onSearch = {this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
