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

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hide: !this.props.displayInitially,
		};
	}

	handleClick() {
		this.setState({
			hide: !this.state.hide,
		});
	}

	render() {
		const {
			linkText, children,  ...rest
		} = this.props;
		const { hide } = this.state;

		const updown = (hide === true) ? 'down' : 'up';

		return (
			<ThisOughtToBeAFragment>
				<Button onClick={e => this.handleClick()} {...rest}>
					{`${linkText} `}
					<FontIcon name={`arrow-alt-${updown}`} />
				</Button>
				<HideMeMaybe hide={hide}>
					{children}
				</HideMeMaybe>
			</ThisOughtToBeAFragment>
		);
	}
}
Dropdown.propTypes = {
	children: propTypes.oneOfType([
		propTypes.node,
		propTypes.arrayOf(propTypes.node),
	]).isRequired,
	displayInitially: propTypes.bool,
	linkText: propTypes.string.isRequired,
};
Dropdown.defaultProps = {
	displayInitially: false,
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
