import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { LinkBarLinkBase } from './LinkBarLinkBase';

const Button = LinkBarLinkBase.withComponent('button').extend`
	cursor: pointer;
`;

const HideMeMaybe = styled.div`
	${props => (props.hide ? css`display: none;` : '')}
`;

const ThisOughtToBeAFragment = styled.div``;

class Dropdown extends React.Component {
	constructor() {
		super();
		this.state = {
			hide: true,
		};
	}

	handleClick() {
		this.setState({
			hide: !this.state.hide,
		});
	}

	render() {
		const {
			linkText, children, ...rest
		} = this.props;
		const { hide } = this.state;

		return (
			<ThisOughtToBeAFragment>
				<Button onClick={e => this.handleClick()} {...rest}>{linkText}</Button>
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
	linkText: propTypes.string.isRequired,
};

// When we export this as a styled component,
// we can use it in interpoliations,
// for example in other styled compontents
const LinkBarDropdown = styled(Dropdown)``;
LinkBarDropdown.displayName = 'LinkBarDropdown';

export const XSmallLinkBarDropdown = props => <LinkBarDropdown size="xsmall" {...props} />;
export const SmallLinkBarDropdown = props => <LinkBarDropdown size="small" {...props} />;
export { LinkBarDropdown };
export const LargeLinkBarDropdown = props => <LinkBarDropdown size="large" {...props} />;
