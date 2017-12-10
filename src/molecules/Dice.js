import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import { unshadeColorString } from '../utils/unshade-color-string';

import { Pips } from '../atoms/Pips';

const InlineBlock = styled.div`
	display: inline-block;
	line-height: 0;
	border-radius: ${props => props.borderRadius};
	overflow: hidden;
	width: ${props => props.size};
`;

// Square with fill color
const Face = withTheme(({ theme, color }) => <rect height="101" width="100" x="0" y="0" fill={theme.colors[color]} />);

// Triangle with fill color
const FaceShade = withTheme(({ theme, color, faceShade }) => (<path
	d="M 0 0 L 100 0 L 0 100 z"
	fill={theme.colors[
		unshadeColorString(color) + faceShade
	]}
/>));

const Dice = ({
	borderRadius,
	size,
	theme,
	color,
	faceShade,
	pipColor,
	value,
	...rest
}) => {
	return (
		<InlineBlock size={size} borderRadius={borderRadius} {...rest}>
			<svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
				<Face color={color} />
				<FaceShade color={color} faceShade={faceShade} />
				<Pips value={value} pipColor={pipColor} />
			</svg>
		</InlineBlock>
	);
};

Dice.propTypes ={
	borderRadius: PropTypes.string,
	color: PropTypes.string,
	faceShade: PropTypes.oneOf(['', 'Dark', 'Light', 'Lighter']),
	pipColor: PropTypes.string,
	size: PropTypes.string,
	theme: PropTypes.shape({}).isRequired,
	value: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};
Dice.defaultProps = {
	borderRadius: '0',
	color: 'primary',
	faceShade: 'Dark',
	pipColor: 'white',
	size: '2.4rem',
};

export default withTheme(Dice);
