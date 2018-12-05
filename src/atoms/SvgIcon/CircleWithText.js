import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Svg = styled.svg`
	font-size: ${props => props.fontSize};
	font-family: Times New Roman,"serif";
	text-transform: capitalize;
	width: ${props => props.size}rem;
`;
Svg.defaultProps = {
	size: 5,
};

const Text = styled.text`
	text-anchor: middle;
`;

const Circle = styled.circle`
	fill: ${props => props.fill};
	stroke: #010101;
	stroke-width: 1.6871;
	stroke-miterlimit: 10;
`;
Circle.defaultProps = {
	fill: 'transparent',
};

const CircleWithText = ({
	text,
	fontSize,
	fill,
	textColor,
}) => (
	<Svg
		viewBox="0 0 500 500"
		fontSize={fontSize}
	>
		<Circle cx="250" cy="250" r="245" fill={fill} />
		<Text x="50%" y="50%" fill={textColor} dy=".3em">{text}</Text>
	</Svg>
);

CircleWithText.propTypes = {
	text: PropTypes.string,
	fontSize: PropTypes.string,
	fill: PropTypes.string,
	textColor: PropTypes.string,
};

CircleWithText.defaultProps = {
	text: '',
	fontSize: '12em',
	fill: 'transparent',
	textColor: 'black',

};

export { CircleWithText };
