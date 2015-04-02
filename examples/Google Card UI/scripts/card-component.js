var Card = React.createClass({

	render: function() {
		return (
			<section className="card">
				<HeadingTag strongtext={this.props.strong} normaltext={this.props.data} />
				<Subheading contents={this.props.from} />
			</section>
		);
	}

});