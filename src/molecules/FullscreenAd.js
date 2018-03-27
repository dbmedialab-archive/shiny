import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


import { AdWrapper } from '../atoms/AdWrapper';

if (typeof window !== 'undefined') {
	import('intersection-observer');
}

const StyledReserveSpacer = styled.div`
	height: 100vh;
	width: 100%;
	display: ${props => (props.shouldHide ? 'none' : 'block')};
`;

const StyledAdWrapper = AdWrapper.extend`
	position: absolute;
	top: 0;
	left: 0;
  height: 100vh;
  width: 100%;
	overflow: hidden;
  margin: 0;
  padding: 0;
  display: ${props => (props.shouldHide ? 'none' : 'block')};
	z-index: -100;
	clip: rect(0, 100vw, 100vh, 0);

  & > div > div {
		z-index: -1;
    position: fixed;
    top: 0;
    right: 0;
		left: 0;
		bottom: 0;
		width: 100% !important;
		height: 100vh !important;
		transform: translate3d(0px, 0px, 0px);
  }

  & iframe {
    width: 100% !important;
    height: 100vh !important;
  }
`;

const FullscreenAd = (props) => {
	return (
		<StyledReserveSpacer shouldHide={props.shouldHide}>
			<StyledAdWrapper {...props}  />
		</StyledReserveSpacer>
	);
};

FullscreenAd.propTypes = {
	shouldHide: PropTypes.bool.isRequired,
};

export { FullscreenAd };

