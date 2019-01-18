import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { LinkBarButton } from './LinkBarButton';
import { FontIcon } from './FontIcon';

// I just met you,
// And this is crazy.
// Here's my Dropdown... so
const HideMeMaybe = styled.div`
	${props => (props.hide ? css`display: none;` : '')}
`;

class Dropdown extends React.Component {
	constructor(props) {
		super(props);

		const { displayInitially } = this.props;

		this.lastFocusTime = 0;
		this.state = {
			hide: !displayInitially,
		};

		this.updateLastFocusTime = this.updateLastFocusTime.bind(this);
		this.hideIfNotRecentlyFocused = this.hideIfNotRecentlyFocused.bind(this);
		this.toggle = this.toggle.bind(this);
		this.tryHide = this.tryHide.bind(this);
	}

	/**
	 * Hide on blur
	 *
	 * When changing focus between elements in the dropdown,
	 * the blur and focus events will bubble up here in rapid succession.
	 * Therefore we apply a grace time (delay) after the blur event
	 * before we hide the dropdown.
	 */
	hideIfNotRecentlyFocused() {
		const delay = 100; // milliseconds
		setTimeout(() => Date.now() - this.lastFocusTime > delay && this.hide(), delay);
	}

	updateLastFocusTime() {
		this.lastFocusTime = Date.now();
	}

	hide() {
		this.setState({
			hide: true,
		});
	}

	show() {
		this.setState({
			hide: false,
		});
	}

	tryHide() {
		const { hideOnClick } = this.props;

		if (hideOnClick) {
			this.hide();
		}
	}

	toggle() {
		const { hide } = this.state;

		this.setState({
			hide: !hide,
		});
	}

	render() {
		const {
			children, Trigger, ...rest
		} = this.props;
		const { hide } = this.state;

		return (
			<div
				onFocus={this.updateLastFocusTime}
				onBlur={this.hideIfNotRecentlyFocused}
			>
				<Trigger
					aria-expanded={hide ? 'false' : 'true'}
					hide={hide}
					onClick={this.toggle}
					{...rest}
				/>
				<HideMeMaybe onClick={this.tryHide} hide={hide} tabIndex={-1}>
					{children}
				</HideMeMaybe>
			</div>
		);
	}
}

const StandardTrigger = (props) => {
	const { linkText, hide, ...rest } = props;
	const direction = (hide === true) ? 'down' : 'up';

	return (
		<LinkBarButton {...rest}>
			{linkText}{' '}
			<FontIcon name={`arrow-alt-${direction}`} />
		</LinkBarButton>
	);
};
StandardTrigger.displayName = 'StandardTrigger';
StandardTrigger.propTypes = {
	hide: PropTypes.bool,
	linkText: PropTypes.string,
};
StandardTrigger.defaultProps = {
	hide: false,
	linkText: '',
};

Dropdown.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]).isRequired,
	/** Expands the menu by default. */
	displayInitially: PropTypes.bool,
	/** Text to display in the link. Can be overriden with the _children_ prop. */
	linkText: PropTypes.string,
	/** Sets position: relative on the button. Needed to position dropdowns absolutely. */
	isRelative: PropTypes.bool,
	/** Component for providing custom button elements. */
	Trigger: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ render: PropTypes.func }),
	]),
	/** For providing additional classnames. */
	className: PropTypes.string,
	/** @TODO: What does this do? */
	hideOnClick: PropTypes.bool,
};
Dropdown.defaultProps = {
	displayInitially: false,
	isRelative: true,
	className: null,
	linkText: null,
	Trigger: StandardTrigger,
	hideOnClick: false,
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

XSmallLinkBarDropdown.displayName = 'XSmallLinkBarDropdown';
SmallLinkBarDropdown.displayName = 'SmallLinkBarDropdown';
LinkBarDropdown.displayName = 'LinkBarDropdown';
LargeLinkBarDropdown.displayName = 'LargeLinkBarDropdown';
