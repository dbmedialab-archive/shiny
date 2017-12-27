import Styled from 'styled-components';


const setTextAlign = (sticky) => {
	if (sticky === 'right') return 'left';
	if (sticky === 'left') return 'right';
	return 'center';
};

const AdWrapper = Styled.div`
	width: ${props => props.width || '320px'};
	height: auto;
	min-height: ${props => props.height || '250px'};
	margin-bottom: 0.9375rem;
	margin-left: auto;
	margin-right: auto;
	position: relative;
	clear: both;
	text-align: ${props => setTextAlign(props.sticky)};

	&:before {
		content: 'Annonse';
		text-transform: ${props => props.theme.variables.adWrapperCase};
		color: ${props => props.theme.variables.adWrapperFontColor};
		font-size: ${props => props.theme.variables.adWrapperFontSize};
		text-align: ${props => setTextAlign(props.sticky)};
		display: block;
		width: 100%;
		background: ${props => (props.sticky ? '#fff' : props.theme.variables.adWrapperBackgroundColor)};
		line-height: 2.63rem;
		padding: ${props => (props.sticky ? '0 10px' : '0')};
		box-sizing: border-box;
	}
`;
export { AdWrapper };
