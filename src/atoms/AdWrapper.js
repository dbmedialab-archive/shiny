import Styled from 'styled-components';
import PropTypes from 'prop-types';

import { getColor, getVariable } from '../utils';

const setTextAlign = (sticky) => {
	if (sticky === 'right') return 'left';
	if (sticky === 'left') return 'right';
	return 'center';
};

const AdWrapper = Styled.div`
	width: ${props => props.width};
	height: auto;
	min-height: calc(${props => props.height} + ${getVariable('verticalBase')});
	margin-bottom: ${getVariable('verticalBase')};
	margin-left: auto;
	margin-right: auto;
	position: relative;
	clear: both;
	text-align: ${props => setTextAlign(props.sticky)};

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
`;


AdWrapper.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	children: PropTypes.node.isRequired,
	shouldHideAttribution: PropTypes.bool.isRequired,
	sticky: PropTypes.string,
};

AdWrapper.defaultProps = {
	sticky: '',
	width: '32.0rem',
	height: '25.0rem',
};

export { AdWrapper };
