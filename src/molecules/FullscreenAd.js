import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';


import { AdWrapper } from '../atoms/AdWrapper';

if (
	typeof window !== 'undefined'
	&& !('IntersectionObserver' in window)
  && !('IntersectionObserverEntry' in window)
) {
	/* eslint-disable global-require */
	require('intersection-observer');
}

const StyledReserveSpacer = styled.div`
	height: ${p => (p.isBannerAdInFullscreenSlot ? p.height: '100vh')};
	width: ${p => (p.isBannerAdInFullscreenSlot ? p.width: '100%')};
	${p => p.isBannerAdInFullscreenSlot && css`margin: auto;`}
	display: ${props => (props.shouldHide ? 'none' : 'block')};
`;

const AdUnitWrapper = styled.div`
	position: absolute;
	top: 0;
	${p => !p.isBannerAdInFullscreenSlot && css`
		left: 0;
	  height: 100vh;
	  width: 100%;
	`}
	overflow: hidden;
  margin: 0;
  padding: 0;
  display: ${props => (props.shouldHide ? 'none' : 'block')};
	z-index: 10;
	text-align: center;

	${props => !props.isIE11 && css`
		clip: rect(2.4rem, 100vw, 100vh, 0);
	`}

  & > div {
		z-index: 1;
    top: ${props => (props.isIE11 ? '2.4rem' : '0')};
    right: 0;
		left: 0;
		bottom: 0;
		transform: translate3d(0px, 0px, 0px);
		${p => !p.isBannerAdInFullscreenSlot && css`
			position: ${props => (props.isIE11 ? 'absolute' : 'fixed')};
			width: 100% !important;
			height: 100vh !important;
		`}
  }

  & iframe {
		text-align: center;
		${p => !p.isBannerAdInFullscreenSlot && css`
	    width: 100% !important;
	  	height: 100% !important;
		`}
  }
`;


const FullscreenAd = forwardRef((props, ref) => {
	const {
		shouldHide, isBannerAdInFullscreenSlot, width, height,
	} = props;

	return (
		<StyledReserveSpacer
			shouldHide={shouldHide}
			ref={ref}
			isBannerAdInFullscreenSlot={isBannerAdInFullscreenSlot}
			width={width}
			height={height}
		>
			<AdWrapper width="100%" />
			<AdUnitWrapper {...props} isBannerAdInFullscreenSlot={isBannerAdInFullscreenSlot} />
		</StyledReserveSpacer>
	);
});

FullscreenAd.propTypes = {
	shouldHide: PropTypes.bool.isRequired,
	isBannerAdInFullscreenSlot: PropTypes.bool,
	width: PropTypes.string,
	height: PropTypes.string,
};
FullscreenAd.defaultProps = {
	isBannerAdInFullscreenSlot: false,
	width: '100%',
	height: '100vh',
};

export { FullscreenAd };
