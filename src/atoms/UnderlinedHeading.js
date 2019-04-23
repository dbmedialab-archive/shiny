import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { getColor } from '../utils';
import { Heading } from './Heading';

const CenteredContent = styled.div`
	text-align: center;
	display: inline-block;
`;

const StyledLine = styled.div`
${({
		size, lineWidth, ALLCAPS, lineHeight, lineColor, mobileLine, ...rest
	}) => css`
	width: ${lineWidth};
	border-bottom: ${lineHeight}rem solid ${getColor(lineColor)(rest)};
	text-transform: ${ALLCAPS ? 'uppercase' : 'initial'};
	margin-left: auto;
	margin-right: auto;
	@media only screen
	and (min-width: ${rest.theme.flexboxgrid.breakpoints.xs}em)
	and (max-width: ${rest.theme.flexboxgrid.breakpoints.md}em) {
		${!mobileLine && 'border-bottom: none;'}
	}`
}
`;

const UnderlinedHeading = ({
	size, lineWidth, ALLCAPS, lineHeight, lineColor, mobileLine, ...rest
}) => (
	<CenteredContent>
		<Heading size={size} ALLCAPS={ALLCAPS} {...rest} />
		<StyledLine mobileLine={mobileLine} lineWidth={lineWidth} lineHeight={lineHeight} lineColor={lineColor} />
	</CenteredContent>
);
UnderlinedHeading.propTypes = {
	size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
	lineWidth: PropTypes.string,
	lineHeight: PropTypes.string,
	lineColor: PropTypes.string,
	mobileLine: PropTypes.bool,
	ALLCAPS: PropTypes.bool,
};
UnderlinedHeading.defaultProps = {
	size: 'large',
	lineWidth: '80%',
	lineHeight: '0.1',
	lineColor: 'primary',
	mobileLine: false,
	ALLCAPS: false,
};

export { UnderlinedHeading };

export const UnderlinedXSmallHeading = props => <UnderlinedHeading size="xsmall" {...props} />;
export const UnderlinedSmallHeading = props => <UnderlinedHeading size="small" {...props} />;
export const UnderlinedMediumHeading = props => <UnderlinedHeading size="medium" {...props} />;
export const UnderlinedLargeHeading = props => <UnderlinedHeading size="large" {...props} />;
export const UnderlinedXLargeHeading = props => <UnderlinedHeading size="xlarge" {...props} />;
export const UnderlinedHugeHeading = props => <UnderlinedHeading size="huge" {...props} />;
