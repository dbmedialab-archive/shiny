import Styled from 'styled-components';
import PropTypes from 'prop-types';

const setTextAlign = (sticky) => {
	if (sticky === 'right') return 'left';
	if (sticky === 'left') return 'right';
	return 'center';
};

const AdWrapper = Styled.div`
	width: ${props => props.width || '32.0rem'};
	height: auto;
	min-height: calc(${props => props.height || '25.0rem'} + 2.63rem);
	margin-bottom: 2.4rem;
	margin-left: auto;
	margin-right: auto;
	position: relative;
	clear: both;
	text-align: ${props => setTextAlign(props.sticky)};


	&::before {
		content: 'Annonse';
		text-transform: ${props => props.theme.variables.adWrapperCase};
		color: ${props => props.theme.variables.adWrapperFontColor};
		font-size: ${props => props.theme.variables.adWrapperFontSize};
		text-align: ${props => setTextAlign(props.sticky)};
		display: block;
		width: 100%;
		background: ${props => (props.sticky ? '#fff' : props.theme.variables.adWrapperBackgroundColor)};
		line-height: 2.63rem;
		padding: ${props => (props.sticky ? '0 1.0rem' : '0')};
		box-sizing: border-box;
		opacity: ${props => (props.shouldHideAttribution ? '0' : '1')};
		transition: opacity .3s;
		will-change: opacity;
	}
`;

AdWrapper.propTypes = {
	sticky: PropTypes.string,
	shouldHideAttribution: PropTypes.bool,
};

AdWrapper.defaultProps = {
	sticky: '',
	shouldHideAttribution: true,
};

export { AdWrapper };
