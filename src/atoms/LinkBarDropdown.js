import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { LinkBarLinkBase } from './LinkBarLinkBase';
import { FontIcon } from './FontIcon';

const Button = LinkBarLinkBase.withComponent('button').extend`
	cursor: pointer;
`;

// I just met you,
// And this is crazy.
// Here's my Dropdown... so
const HideMeMaybe = styled.div`
	${props => (props.hide ? css`display: none;` : '')}
`;

const ThisOughtToBeAFragment = styled.div``;

const Dropdown = (props) => {
	const {
		handleClick, id, linkText, children, show,  ...rest
	} = props;

	const hide = id !== show;
	const updown = (hide === true) ? 'down' : 'up';

	return (
		<ThisOughtToBeAFragment>
			<Button onClick={e => handleClick(id)}  {...rest}>
				{`${linkText} `}
				<FontIcon name={`arrow-alt-${updown}`} />
			</Button>
			<HideMeMaybe hide={hide}>
				{children}
			</HideMeMaybe>
		</ThisOughtToBeAFragment>
	);
};
Dropdown.propTypes = {
	children: propTypes.oneOfType([
		propTypes.node,
		propTypes.arrayOf(propTypes.node),
	]).isRequired,
	displayInitially: propTypes.bool,
	linkText: propTypes.string.isRequired,
	show: propTypes.number,
	id: propTypes.number,
	handleClick: propTypes.func,

};
Dropdown.defaultProps = {
	displayInitially: false,
	id: -1,
	show: 0,
	handleClick: () => {},
};

// When we export this as a styled component,
// we can use it in interpolations,
// for example in other styled compontents
const LinkBarDropdown = styled(Dropdown)``;
LinkBarDropdown.displayName = 'LinkBarDropdown';

export const XSmallLinkBarDropdown = props => <LinkBarDropdown size="xsmall" {...props} />;
export const SmallLinkBarDropdown = props => <LinkBarDropdown size="small" {...props} />;
export { LinkBarDropdown };
export const LargeLinkBarDropdown = props => <LinkBarDropdown size="large" {...props} />;
