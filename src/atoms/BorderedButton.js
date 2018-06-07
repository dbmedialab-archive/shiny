import { css } from 'styled-components';
import propTypes from 'prop-types';
import { Button } from './Button';
import { isBright } from '../utils/luminance';

const calculateTextColor = (theme, backgroundColor=theme.colors.primary) => (
	isBright(backgroundColor)
		? theme.colors.grayTintDark
		: theme.colors.white
);
const coloredBackground = css`
			border-color: ${props => props.theme.colors.primary};
			background-color: ${props => props.theme.colors.primary};
			color: ${props => calculateTextColor(props.theme)};
`;

const BorderedButton = Button.extend`
	color: ${props => props.theme.colors.grayTintDark};
	border-radius: 0.3rem;
	border: solid 0.1rem ${props => props.theme.colors.grayTint};
	transition-property: color, background-color, border-color;
	background-color: transparent;
	font-weight: 500;
	letter-spacing: 0;
	outline: none;
	cursor: pointer;
	${props => props.isActive && coloredBackground};

	@media (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		&:hover{
			${coloredBackground}
		};
	}
`;

BorderedButton.defaultProps = {
	ALLCAPS: true,
};
BorderedButton.propTypes = {
	ALLCAPS: propTypes.bool,
};

module.exports = { BorderedButton };
