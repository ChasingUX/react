var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

//when we are at the root dir (/) the router will load the Main.js component
module.exports = (
	//our handler will be the main component, which passes in child components to RouteHandler
	<Route name="app" path="/" handler={Main}>
		//:username  is the dynamic entry of the url
		<Route name="profile" path="profile/:username" handler={Profile} />
		// if none of the above routes match, the default route will be rendered
		<DefaultRoute handler={Home} />
	</Route>
	
);