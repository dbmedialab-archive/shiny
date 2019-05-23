import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { getColor, getVariable, media } from '../utils';

const setTextAlign = (sticky) => {
	if (sticky === 'right') return 'left';
	if (sticky === 'left') return 'right';
	return 'center';
};

const AdWrapperBase = styled.div`
	width: ${props => props.width};
	height: auto;
	min-height: calc(${props => props.height} + ${getVariable('verticalBase')});
	margin-bottom: ${getVariable('verticalBase')};
	margin-left: auto;
	margin-right: auto;
	clear: both;
	text-align: ${props => setTextAlign(props.sticky)};
	will-change: height, min-height;
	position: relative;

	&::before {
		content: 'Annonse';
		text-transform: ${getVariable('adWrapperCase')};
		font-size: ${getVariable('uiSmallSize')};
		line-height: ${getVariable('uiSmallLineHeight')};

		text-align: ${props => setTextAlign(props.sticky)};
		display: block;
		width: 100%;
		background: ${props => getColor(props.sticky ? 'white' : 'adWrapperBackgroundColor')};
		color: ${getColor('adWrapperFontColor')};
		padding: ${props => (props.sticky ? '0.35rem 1.0rem' : '0.35rem 0')};
		box-sizing: border-box;
		opacity: ${props => (props.shouldHideAttribution ? '0' : '1')};
		transition: opacity .3s;
		will-change: opacity;
	}

	div iframe {
		${media.small`width: inherit;`}
	}
`;


AdWrapperBase.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	shouldHideAttribution: PropTypes.bool,
	sticky: PropTypes.string,
	itemType: PropTypes.string,
	itemScope: PropTypes.bool,
};

AdWrapperBase.defaultProps = {
	sticky: '',
	width: '32.0rem',
	height: '25.0rem',
	shouldHideAttribution: false,
	itemType: 'http://schema.org/WPAdBlock',
	itemScope: true,
};

const AdWrapper = forwardRef((props, ref) => <AdWrapperBase ref={ref} {...props} />);

export { AdWrapper };
