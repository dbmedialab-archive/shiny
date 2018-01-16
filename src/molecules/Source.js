import React, { Component } from 'react';
import propTypes from 'prop-types';

class Source extends Component {
	static propTypes = {
		onMounted: propTypes.func.isRequired,
		srcSet: propTypes.string.isRequired,
		media: propTypes.string,
	}

	static defaultProps = {
		media: '',
	}

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
