var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes');

// it tells the router which component to render based on the path that we are at (in routes file)
Router.run(routes, function(Root){
	React.render(<Root />, document.getElementById('app'));
});