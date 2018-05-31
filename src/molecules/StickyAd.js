import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Sticker from 'react-stickyfill';

import { AdWrapper } from '../atoms/AdWrapper';

const StyledAdWrapper = styled(AdWrapper)`
	position: sticky;
	top: 0;
	margin-left: 0;
	margin-right: 0;
`;

const StickyWrapper = styled.div`
	position: absolute;
	top: ${props => props.theme.variables.verticalBase};

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


const StickyAd = ({
	children, width, height, sticky, shouldHideAttribution,
}) => (
	<StickyWrapper sticky={sticky}>
		<Sticker>
			<StyledAdWrapper height={height} width={width} shouldHideAttribution={shouldHideAttribution}>
				{children}
			</StyledAdWrapper>
		</Sticker>
	</StickyWrapper>
);

StickyAd.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	sticky: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	shouldHideAttribution: PropTypes.bool.isRequired,
};

StickyAd.defaultProps = {
	width: '32.0rem',
	height: '25.0rem',
};

export { StickyAd };
