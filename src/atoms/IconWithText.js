import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import { SvgIcon } from './SvgIcon';

const IconBlock = Styled.div`
text-align: center;
display: inline-block;
`;

const BottomText = Styled.div`
    width: 100%;
    font-size: ${(props) => {
		return props.textSize;
	}}rem;
`;

const IconWithText = ({
	text, iconSize, textSize, ...rest
}) => (
	<IconBlock>
		<SvgIcon size={iconSize} {...rest} />
		<BottomText textSize={textSize}>{text}</BottomText>
	</IconBlock>
);

IconWithText.propTypes = {
	iconSize: PropTypes.number,
	textSize: PropTypes.number,
	name: PropTypes.string,
	text: PropTypes.string,
};

IconWithText.defaultProps = {
	iconSize: 5,
	textSize: 5,
	name: '',
	text: '',
};

export { IconWithText };
