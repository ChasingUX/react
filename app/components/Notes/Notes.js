var React = require('react');

var Notes = React.createClass({
	render: function(){
		return (
			<div>
				<h3>User Notes</h3>
				Username: {this.props.username} <br />
				Notes: {this.props.notes} <br />
			</div>
		)
	}
});

module.exports = Notes;