var React = require('react');
var Router = require('react-router');
var Repos = require('./GitHub/Repos');
var UserName = require('./GitHub/UserProfile');
var Notes = require('./Notes/Notes');

var Profile = React.createClass({
	//takes components state, and adds properties to it - allows us to query the router parametere and get specific user that we need
	mixins: [Router.State],
	getInitialState: function(){
		return {
			notes: ['note1', 'note2'],
			bio: {name: 'Jesse'},
			repos: ['libscore','react-github']
		}
	},
	render: function(){
		var username = this.getParams().username;
		return (
			<div>
				<div className="row">
					<div className="columns large-4">
						<section>
							<UserName username={username} bio={this.state.bio} />
						</section>	
					</div>
					<div className="columns large-4">
						<section>
							<Repos username={username} repos={this.state.repos} />
						</section>	
					</div>
					<div className="columns large-4">
						<section>
							<Notes username={username} notes={this.state.notes} />
						</section>	
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Profile;