import React, { Component } from 'react';

class Source extends Component {
	componentDidMount() {
		if (this.props.onMounted) {
			if (this.node) {
				this.props.onMounted(this.node);
			}
		}
	}

	render() {
		return <source media={this.props.media} srcSet={this.props.srcSet} ref={(node) => { this.node = node; }} />;
	}
}

export { Source };
