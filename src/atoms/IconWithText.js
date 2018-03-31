import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import { SvgIcon } from './SvgIcon';

const IconBlock = Styled.div`
	text-align: center;
	display: inline-block;
	
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}rem) {
		text-align: left;
		display: inline-flex;
	}
`;

const BottomText = Styled.div`
    width: 100%;
    font-size: ${props => props.textSize}rem;
	text-transform: lowercase;
	
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}rem) {
		font-size: 2.9rem;
    	line-height: 1.3;
    	display: flex;
    	flex-direction: column;
    	justify-content: center;
	}
`;

const IconWithText = ({
	text, iconSize, iconSizeSm, textSize, ...rest
}) => (
	<IconBlock>
		<SvgIcon size={iconSize} size-sm={iconSizeSm} {...rest} />
		<BottomText textSize={textSize}>{text}</BottomText>
	</IconBlock>
);

IconWithText.propTypes = {
	iconSize: PropTypes.number,
	iconSizeSm: PropTypes.number,
	textSize: PropTypes.number,
	name: PropTypes.string,
	text: PropTypes.node,
};

IconWithText.defaultProps = {
	iconSize: 5,
	iconSizeSm: 5,
	textSize: 1.6,
	name: '',
	text: '',
};

export { IconWithText };
