import { css } from 'styled-components';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from './Button';
import { isBright, getColor } from '../utils';

const calculateTextColor = (theme, backgroundColor=theme.colors.primary) => (
	isBright(backgroundColor)
		? getColor('grayTintDark')
		: getColor('white')
);

const coloredBackground = css`
	border-color: ${getColor('primary')};
	background-color: ${getColor('primary')};
	color: ${props => calculateTextColor(props.theme)};
`;

const BorderedButton = styled(Button)`
	color: ${getColor('grayTintDark')};
	border-radius: 0.3rem;
	border: solid 0.1rem ${getColor('grayTint')};
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
