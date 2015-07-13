var React = require('react');
/* if component is recieving data from parent component, its called props */

var UserProfiles = React.createClass({
	render: function(){
		return (
			<div>
				<h3>User Profiles</h3>
				Username: {this.props.username} <br />
				Bio: {this.props.bio} <br />

			</div>
		)
	}
});

module.exports = UserProfiles;