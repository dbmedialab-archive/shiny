import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Sticker from 'react-stickyfill';

import { AdWrapper } from '../atoms/AdWrapper';

const StyledAdWrapper = styled(AdWrapper)`
	position: sticky;
	top: ${props => props.topOffset};
	margin-left: 0;
	margin-right: 0;
`;

const StickyWrapper = styled.div`
	position: absolute;
	top: ${props => props.theme.variables.verticalBase};

	@media screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.xs}em) {
		${props => (props.sticky === 'right' ? 'left: 100%;' : 'right: 100%;')}
	}
	${props => ['sm', 'md', 'lg'].map(
		size => css`
				@media screen and (min-width: ${props.theme.flexboxgrid.breakpoints[size]}em) {
					${(props => (props.sticky === 'right'
		? `left: calc(50% + 1/2 * ${props.theme.flexboxgrid.container[size]}rem);`
		: `right: calc(50% + 1/2 * ${props.theme.flexboxgrid.container[size]}rem);`))(props)}
				}
			`
	)}

	height: 100%;
	width: 30rem;
`;

const StickyAd = forwardRef(({
	children, width, height, sticky, shouldHideAttribution, topOffset, ...rest
}, ref) => (
	<StickyWrapper sticky={sticky} ref={ref} {...rest}>
		<Sticker>
			<StyledAdWrapper height={height} width={width} shouldHideAttribution={shouldHideAttribution} topOffset={topOffset}>
				{children}
			</StyledAdWrapper>
		</Sticker>
	</StickyWrapper>
));

StickyAd.propTypes = {
	width: PropTypes.string,
	topOffset: PropTypes.string,
	height: PropTypes.string,
	sticky: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	shouldHideAttribution: PropTypes.bool.isRequired,
};

StickyAd.defaultProps = {
	width: '32.0rem',
	height: '25.0rem',
	topOffset: '0',
};

export { StickyAd };
