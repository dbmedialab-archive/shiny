import React, { Component } from 'react';
import propTypes from 'prop-types';

class Source extends Component {
	static propTypes = {
		srcSet: propTypes.string.isRequired,
		media: propTypes.string,
	}

	static defaultProps = {
		media: '',
	}

	render() {
		return <source media={this.props.media} srcSet={this.props.srcSet} />;
	}
}

export { Source };
