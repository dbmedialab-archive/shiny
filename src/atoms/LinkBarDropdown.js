import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { LinkBarLinkBase } from './LinkBarLinkBase';
import { FontIcon } from './FontIcon';

const Button = styled(LinkBarLinkBase.withComponent('button'))`
	cursor: pointer;
`;

// I just met you,
// And this is crazy.
// Here's my Dropdown... so
const HideMeMaybe = styled.div`
	${props => (props.hide ? css`display: none;` : '')}
`;

const StyledDropdown = styled.div``;

class Dropdown extends React.Component {
	constructor(props) {
		super(props);

		this.lastFocusTime = 0;
		this.state = {
			hide: !this.props.displayInitially,
		};

		this.updateLastFocusTime = this.updateLastFocusTime.bind(this);
		this.hideIfNotRecentlyFocused = this.hideIfNotRecentlyFocused.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	getStandardTrigger() {
		const { linkText, ...rest } = this.props;
		const { hide } = this.state;
		const updown = (hide === true) ? 'down' : 'up';

		return (
			<Button
				aria-expanded={hide ? 'false' : 'true'}
				onClick={this.toggle}
				{...rest}
			>
				{linkText}{' '}
				<FontIcon name={`arrow-alt-${updown}`} />
			</Button>
		);
	}

	getCustomTrigger() {
		const { hide } = this.state;
		const { Trigger, className } = this.props;

		return (
			<Trigger
				className={className}
				aria-expanded={hide ? 'false' : 'true'}
				onClick={this.toggle}
			/>
		);
	}

	getTrigger() {
		const { Trigger } = this.props;

		return Trigger ? this.getCustomTrigger() : this.getStandardTrigger();
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

	toggle() {
		this.setState({
			hide: !this.state.hide,
		});
	}

	render() {
		const { children } = this.props;
		const { hide } = this.state;

		return (
			<StyledDropdown
				onFocus={this.updateLastFocusTime}
				onBlur={this.hideIfNotRecentlyFocused}
			>
				{this.getTrigger()}
				<HideMeMaybe hide={hide} tabIndex={-1}>
					{children}
				</HideMeMaybe>
			</StyledDropdown>
		);
	}
}

Dropdown.propTypes = {
	children: propTypes.oneOfType([
		propTypes.node,
		propTypes.arrayOf(propTypes.node),
	]).isRequired,
	displayInitially: propTypes.bool,
	linkText: propTypes.string,
	isRelative: propTypes.bool,
	Trigger: propTypes.node,
	className: propTypes.string,
};
Dropdown.defaultProps = {
	displayInitially: false,
	isRelative: true,
	className: null,
	linkText: null,
	Trigger: null,
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
