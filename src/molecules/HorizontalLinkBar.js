import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
	HorizontalOverflowGradient,
	HorizontalFlexingList as Bar,
	LinkBarItem,
	NavWithOptionalConstrainer,
} from '..';

class LinkBar extends React.Component {
	constructor(props) {
		super();

		this.state = {
			show: 0,
		};
	}
	handleClick(id) {
		this.setState({
			show: this.state.show !== id ? id : -1,
		});
	}
	render() {
		const {
			background,
			children,
			shouldFadeOut,
			width,
			zIndex,
			isTopLevelComponent,
			...rest
		} = this.props;

		return (
			<NavWithOptionalConstrainer
				background={background}
				width={width}
				zIndex={zIndex}
				isTopLevelComponent={isTopLevelComponent}
			>
				<Bar className="bar" background={background} {...rest}>
					{children && children.map((child, index) => {
						if (child.props && child.props.isListItem) {
							return child;
						}

						return (
							<LinkBarItem key={index} {...child.props}>
								{React.cloneElement(child, {
									id: index,
									show: this.state.show,
									handleClick: this.handleClick.bind(this),
								})}
							</LinkBarItem>
						);
					})}
				</Bar>
				{shouldFadeOut && <HorizontalOverflowGradient />}
			</NavWithOptionalConstrainer>
		);
	}
}

LinkBar.propTypes = {
	background: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	overflow: PropTypes.string,
	shouldAdjustForNestedPadding: PropTypes.bool,
	shouldFlexChildren: PropTypes.bool,
	shouldFadeOut: PropTypes.bool,
	width: PropTypes.string,
	shouldHavePadding: PropTypes.bool,
	zIndex: PropTypes.number,
	isTopLevelComponent: PropTypes.bool,
};

LinkBar.defaultProps = {
	background: 'papayawhip', // colors.white,
	children: null,
	overflow: 'auto',
	shouldAdjustForNestedPadding: false,
	shouldFlexChildren: false,
	shouldFadeOut: false,
	width: 'auto',
	zIndex: 4,
	shouldHavePadding: true,
	isTopLevelComponent: true,
};

// When we export this as a styled component,
// we can use it in interpoliations,
// for example in other styled compontents
const HorizontalLinkBar = styled(LinkBar)``;

export { HorizontalLinkBar };
