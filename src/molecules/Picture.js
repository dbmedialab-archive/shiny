import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledPicture = styled.picture`
	width: 100%;
	display: block;
	position: absolute;
	filter: blur(5.0rem);
	& img {
		display: block;
		max-width: 100%;
	}

	&.loaded {
		filter: blur(0);
		transition: filter .8s ease-in-out;
	}
`;

class Picture extends Component {
	static propTypes = {
		onMounted: propTypes.func.isRequired,
		isLoaded: propTypes.bool.isRequired,
		children: propTypes.node.isRequired,
		alt: propTypes.string,
	}

	static defaultProps = {
		alt: 'Et bilde',
	}

	componentDidMount() {
		if (this.props.onMounted) {
			if (this.node) {
				const img = this.node.querySelector('img');
				this.props.onMounted(img);
			}
		}
		const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
		if (isIE11) {
			Promise.all([
			import('picturefill'),
			import('picturefill/dist/plugins/mutation/pf.mutation'),
			]).then(([picturefill, mutation]) => {
			});
		}
	}

	render() {
		return (
			<StyledPicture
				className={this.props.isLoaded ? 'loaded' : ''}
				alt={this.props.alt}
				innerRef={(node) => { this.node = node; }}
			>
				{this.props.children}
			</StyledPicture>
		);
	}
}

export { Picture };
