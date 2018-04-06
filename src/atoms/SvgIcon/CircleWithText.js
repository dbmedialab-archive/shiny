import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
	font-size: ${props => props.fontSize};
	font-family: Times New Roman,"serif";
	text-transform: capitalize;
`;

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
		<g id="UrTavla">
			<circle
				style={{
					fill, stroke: '#010101', strokeWidth: 1.6871, strokeMiterlimit: 10,
				}}
				cx="250"
				cy="250"
				r="245"
			/>
			<text x="50%" y="50%" textAnchor="middle" fill={textColor} dy=".3em">{text}</text>
		</g>
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
