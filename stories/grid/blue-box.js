import styled from 'styled-components';

const BlueBox = styled.div`
	position: relative;
	box-sizing: border-box;
	background: ${props => props.theme.colors[props.theme.colors.skinColors.calmBackground]};
	border: .1rem solid ${props => props.theme.colors[props.theme.colors.skinColors.calmBorder]};
	color: ${props => props.theme.colors[props.theme.colors.skinColors.calmText]};
	border-radius: .3rem;
	overflow: hidden;
	text-align: center;
	margin-bottom: ${props => props.theme.variables.verticalBase};
	font-size: ${props => props.theme.variables.uiRegularSize};
	line-height: ${props => props.theme.variables.uiRegularLineHeight};
	padding:
		calc(1/2 * ${props => props.theme.variables.verticalBase})
		calc(1/2 * ${props => props.theme.variables.horizontalBase})
	;
`;

const BluerBox = BlueBox.extend`
	background: ${props => props.theme.colors[props.theme.colors.skinColors.nativeAd]};
`;

export default BlueBox;
export { BluerBox };
