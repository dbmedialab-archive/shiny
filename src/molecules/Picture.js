import React, { Component } from 'react';
import styled from 'styled-components';

const StyledPicture = styled.picture`
	width: 100%;
	display: block;
	position: absolute;
	filter: blur(50px);
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
	componentDidMount() {
		if (this.props.onMounted) {
			if (this.node) {
				const img = this.node.querySelector('img');
				this.props.onMounted(img);
			}
		}
	}

	render() {
		return (
			<StyledPicture className={this.props.isLoaded ? 'loaded' : ''} innerRef={(node) => { this.node = node; }} alt={this.props.alt}>
				{this.props.children}
			</StyledPicture>
		);
	}
}

export { Picture };
