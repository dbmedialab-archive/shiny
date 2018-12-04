import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { SvgIcon } from './SvgIcon';

const IconBlock = styled.div`
	text-align: center;
	display: inline-block;
`;

const IconText = styled.div`
	width: 100%;
	font-size: ${(props) => {
		return props.textSize;
	}}rem;
`;

const IconBlockTextRight = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const IconTextRight = styled.div`
	width: 100%;
	font-size: 1.6rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-left: .5rem;
	margin-bottom: .5rem;
	color: ${props => (props.textColor)}
`;

const IconWithText = ({
	text, iconSize, textSize, circleText, position, fill, textColor, ...rest
}) => {
	switch (position) {
	case 'right':
		return (
			<IconBlockTextRight>
				<SvgIcon size={iconSize} {...rest} text={circleText || text} fill={fill} textColor={textColor} />
				<IconTextRight textSize={textSize}>{text}</IconTextRight>
			</IconBlockTextRight>
		);

	default:
		return (
			<IconBlock>
				<SvgIcon size={iconSize} {...rest} text={circleText || text} fill={fill} />
				<IconText textSize={textSize}>{text}</IconText>
			</IconBlock>
		);
	}
};

IconWithText.propTypes = {
	iconSize: PropTypes.number,
	textSize: PropTypes.number,
	name: PropTypes.string,
	text: PropTypes.node,
	circleText: PropTypes.string,
	textColor: PropTypes.string,
	fill: PropTypes.string,
};

IconWithText.defaultProps = {
	iconSize: 5,
	textSize: 1.6,
	name: '',
	text: '',
	circleText: '',
	textColor: 'black',
	fill: 'transparent',
};

export { IconWithText };
