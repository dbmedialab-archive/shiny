import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledPicture = styled.picture`
	width: 100%;
	display: block;
	position: absolute;

	& img {
		display: block;
		max-width: 100%;
		

		${props => (props.shouldBlur ? css`
			backface-visibility: hidden;
			perspective: 1000;
			transform: translate3d(0,0,0);
			transform: translateZ(0);
			will-change: filter;
			&.blur-up {
				
				filter: blur(15px);
				transition: filter 400ms;

				&.lazyloaded {
					filter: blur(0.5px);
				}
		}` : '')}
	}
`;

/**
 * Picture is a styled version of a <picture> tag, with added polyfill for old browsers.
 */
class Picture extends PureComponent {
	static propTypes = {
		children: propTypes.node.isRequired,
		/** The alt text for the <img> tag */
		alt: propTypes.string,
		/** Indicates wether the image should have a blur transition effect */
		shouldBlur: propTypes.bool.isRequired,
	}

	static defaultProps = {
		alt: 'Et bilde',
	}

	componentDidMount() {
		/* eslint-disable global-require */
		const picturefill = require('picturefill');
		require('picturefill/dist/plugins/mutation/pf.mutation.min');

		picturefill();
	}

	render() {
		const { alt, shouldBlur } = this.props;
		return (
			<StyledPicture
				alt={alt}
				shouldBlur={shouldBlur}
			>
				{this.props.children}
			</StyledPicture>
		);
	}
}

export { Picture };
