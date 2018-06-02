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
		

		${props => (!props.preventBlur ? css`
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
		/** Turns off blur transition when true */
		preventBlur: propTypes.bool.isRequired,
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
		const { alt, preventBlur } = this.props;
		return (
			<StyledPicture
				alt={alt}
				preventBlur={preventBlur}
			>
				{this.props.children}
			</StyledPicture>
		);
	}
}

export { Picture };
