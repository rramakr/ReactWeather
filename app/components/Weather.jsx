var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var getWeatherMap = require('getWeatherMap');
var ErrroModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },

  componentDidMount: function () {
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  componentWillRecieveProps: function (newprops) {
    var location = newprops.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  handleSearch: function (location) {
    var self = this;

    this.setState ({
        isLoading: true,
        errorMessage: undefined,
        location: undefined,
        temp: undefined
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
          isLoading: false,
          errorMessage: error.message
      });
    });
  },

  render: function () {
    var {location, temp, isLoading, errorMessage} = this.state;
    var renderMessage = function () {
      if (isLoading) {
        return <h3 className= "text-center">Fetching Weather....</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp= {temp}/>;
      }
    }

    var renderErrorModal = function () {
      if (typeof errorMessage === 'string') {
        return (<ErrroModal message = {errorMessage}/>);
      }
    }

    return (
      <div>
        <h2 className = "text-center page-title">Get Weather</h2>
        <WeatherForm onSearch = {this.handleSearch}/>
        {renderMessage()}
        {renderErrorModal()}
      </div>
    );
  }
});

module.exports = Weather;
