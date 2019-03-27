import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const StyledPicture = styled.picture`
	width: 100%;
	display: block;
	position: absolute;
	height: 100%;
	
	& img {
		display: block;
		max-width: 100%;
		backface-visibility: hidden;
		transform: translate3d(0,0,0);

		${props => (!props.preventBlur ? css`
			perspective: 1000;
			transform: translateZ(0);
			will-change: filter;
			&.blur-up {

				filter: blur(15px);
				transition: filter 400ms;

				&.lazyloaded {
					filter: blur(0.5px);
				}
		}` : '')}

		${props => (props.fadeIn ? css`
			will-change: opacity;
			&.fade-in {
				opacity: 0.1;
				transition: opacity ${props.fadeInTime}ms;

				&.lazyloaded {
					opacity: 1;
				}
		}` : '')}
	}
`;

/**
 * Picture is a styled version of a <picture> tag, with added polyfill for old browsers.
 */
class Picture extends PureComponent {
	static propTypes = {
		children: PropTypes.node.isRequired,
		/** The alt text for the <img> tag */
		alt: PropTypes.string,
		/** Turns off blur transition when true */
		preventBlur: PropTypes.bool.isRequired,
		/** Transition time for the image in ms */
		fadeInTime: PropTypes.number,
	}

	static defaultProps = {
		alt: 'Et bilde',
		fadeInTime: 400,
	}

	componentDidMount() {
		/* eslint-disable global-require */
		const picturefill = require('picturefill');
		require('picturefill/dist/plugins/mutation/pf.mutation.min');

		picturefill();
	}

	render() {
		const {
			children,
			...rest
		} = this.props;

		return (
			<StyledPicture {...rest}>
				{children}
			</StyledPicture>
		);
	}
}

export { Picture };
