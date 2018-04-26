import parseColor from 'parse-color';
import { Button } from './Button';

const calculateTextColor = (theme, backgroundColor=theme.colors.primary) => {
	const { r, g, b } = parseColor(backgroundColor);
	const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000; // converting to YIQ to determine brightness of background
	return (yiq >= 150) ? theme.colors.grayTintDark : theme.colors.white;
};

const BorderedButton = Button.extend`
	color: ${props => props.theme.colors.grayTintDark};
	border-radius: 0.3rem;
	border: solid 0.1rem ${props => props.theme.colors.grayTint};
	transition-property: color, background-color, border-color;
	background-color: transparent;
	font-weight: 500;
	letter-spacing: 0;
	outline: none;

	${props => props.isActive && (`
		border-color: ${props.theme.colors.primary};
		background-color: ${props.isActive && (props.theme.colors.primary)};
		color: ${props.isActive && calculateTextColor(props.theme)};
	`)};
	
	&:hover, &:active{
		border-color: ${props => props.theme.colors.primary};
		background-color: ${props => props.theme.colors.primary};
		color: ${props => calculateTextColor(props.theme)};
	};
`;

BorderedButton.defaultProps = {
	ALLCAPS: true,
};

module.exports = { BorderedButton };
