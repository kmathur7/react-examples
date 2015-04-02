var HeadingTag = React.createClass({

	render: function() {
		return (
			<h1><strong>{this.props.strongtext}</strong> {this.props.normaltext}</h1>
		);
	}

});