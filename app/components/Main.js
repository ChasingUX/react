var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <div className="wrapper">
          <RouteHandler />
        </div>
      </div>
    )
  }
});

module.exports = Main;