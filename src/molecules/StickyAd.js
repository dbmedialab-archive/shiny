import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { AdWrapper } from '../atoms/AdWrapper';

const StyledAdWrapper = AdWrapper.extend`
  position: sticky;
  top: 0;
`;

const StickyWrapper = styled.div`
	position: absolute;
	top: 0;

	@media screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.xs}em) {
		${props => (
		props.sticky === 'right'
			? 'left: 100%;'
			: 'right: 100%;'
	)}}
	${props => ['sm', 'md', 'lg'].map(size => css`
		@media screen and (min-width: ${props.theme.flexboxgrid.breakpoints[size]}em) {
			${props => (
		props.sticky === 'right'
			? `left: calc(50% + 1/2 * ${props.theme.flexboxgrid.container[size]}rem);`
			: `right: calc(50% + 1/2 * ${props.theme.flexboxgrid.container[size]}rem);`
	)}}

		`)}

	height: 100%;
	width: 30.0rem;
	`;


class StickyAd extends Component {
	static propTypes = {
		width: PropTypes.string,
		height: PropTypes.string,
		sticky: PropTypes.string.isRequired,
		children: PropTypes.node.isRequired,
	}

	static defaultProps = {
		width: '32.0rem',
		height: '25.0rem',
	}

	constructor(props) {
		super(props);

		this.props = props;
	}

	componentDidMount() {
		if (this.node) {
			import('../utils/sticky-fill').then((module) => {
				this.stickyFill = module;
				this.stickyFill.addOne(this.node);
			}).catch((e) => {
			});
		}
	}

	componentWillUnmount() {
		if (this.stickyFill && this.node) {
			this.stickyFill.removeOne(this.node);
		}
	}

	render() {
		const {
			children, width, height, sticky,
		} = this.props;

		return (
			<StickyWrapper sticky={sticky}>
				<StyledAdWrapper height={height} width={width} innerRef={(node) => { this.node = node; }}>
					{children}
				</StyledAdWrapper>
			</StickyWrapper>
		);
	}
}


export { StickyAd };
