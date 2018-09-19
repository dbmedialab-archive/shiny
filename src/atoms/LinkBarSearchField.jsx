import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { getColor } from '../utils/get-color';
import { LinkBarLinkBase } from './LinkBarLinkBase';
import { FontIcon } from './FontIcon';

const FontIconBase = LinkBarLinkBase.withComponent(FontIcon);
const AbsoluteFontIcon = styled(FontIconBase)`
	position: absolute;
	font-family: "Helveticons";
`;

const InputBase = LinkBarLinkBase.withComponent('input');
const Input = styled(InputBase)`
	&& {
		/* Magic number: width of the AbsoluteFontIcon */
		padding-left: ${props => (props.size === 'small' ? '2.7rem' : '4.4rem')};
	}

	::placeholder {
		color: ${props => getColor(props.placeholderColor)(props)}
	}
`;

/**
 * This is a docgen header.
 */
const LinkBarSearchField = ({
	action,
	iconColor,
	id,
	size,
	...rest
}) => (
	<Fragment>
		<AbsoluteFontIcon size={size} textColor={iconColor} inset name="search" />
		<form id={id} name={id} action={action}>
			<Input {...rest} size={size} inset rounded type="search" />
		</form>
	</Fragment>
);
LinkBarSearchField.propTypes = {
	/** Color name from theme. Will be used on hover or focus */
	activeBackgroundColor: PropTypes.string,
	/** Color name from theme */
	backgroundColor: PropTypes.string,
	/** Color name from theme */
	iconColor: PropTypes.string,
	/** Unique per page view. It's HTML... */
	id: PropTypes.string,
	/** Color name from theme */
	placeholderColor: PropTypes.string,
	/** Match the size of your sibling LinkBar* elements */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	/** Color name from theme */
	textColor: PropTypes.string,
};
LinkBarSearchField.defaultProps ={
	activeBackgroundColor: null,
	backgroundColor: 'grayTintLighter',
	iconColor: 'link',
	id: 'search',
	placeholderColor: 'typeDisabled',
	size: 'medium',
	textColor: 'type',
};

export { LinkBarSearchField };
export const SmallLinkBarSearchField = props => <LinkBarSearchField size="small" {...props} />;
export const LargeLinkBarSearchField = props => <LinkBarSearchField size="large" {...props} />;
