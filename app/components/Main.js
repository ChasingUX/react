var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Main = React.createClass({
  render: function(){
    return (
      <div>
      	<header>
      		This is a persistent Header
      	</header>
      	<div className="wrapper">
          <RouteHandler />
        </div>
      </div>
    )
  }
});

module.exports = Main;