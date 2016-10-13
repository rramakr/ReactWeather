var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error!!'
    };
  },

  componentDidMount: function () {
    var modalMarkup = (<div id = "error-modal" className = "reveal tiny text-center" data-reveal="">
      <h4>{this.props.title}</h4>
      <p> {this.props.message}</p>
      <p>
         <button className="button hollow" data-close= "" type="button"> OK </button>
      </p>
    </div>);
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

  render: function () {
  return (
    <div />
  );
},

  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  }
});

module.exports = ErrorModal;
