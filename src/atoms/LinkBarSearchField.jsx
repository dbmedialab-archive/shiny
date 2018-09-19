import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

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
`;

/**
 * LinkBarSearchField description goes here, it's a docgen title.
 *
 * This is a docgen description of the component as a whole.
 */
const LinkBarSearchField = ({
	action,
	iconColor,
	id,
	size,
	...rest
}) => (
	<>
		<AbsoluteFontIcon size={size} textColor={iconColor} inset name="search" />
		<form id={id} name={id} action={action}>
			<Input {...rest} size={size} inset rounded type="search" />
		</form>
	</>
);
LinkBarSearchField.propTypes = {
	/** The background color in the search field */
	backgroundColor: PropTypes.string,
	/** Corresponds to the textColor prop in the icon */
	iconColor: PropTypes.string,
	/** Unique per html document */
	id: PropTypes.string,
	/** Affects the height of the LinkBar */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
};
LinkBarSearchField.defaultProps ={
	backgroundColor: 'grayTintLighter',
	iconColor: 'link',
	id: 'search',
	size: 'medium',
};

export { LinkBarSearchField };
export const SmallLinkBarSearchField = props => <LinkBarSearchField size="small" {...props} />;
export const LargeLinkBarSearchField = props => <LinkBarSearchField size="large" {...props} />;
