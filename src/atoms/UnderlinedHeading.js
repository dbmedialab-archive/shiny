import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import { getColor } from '../utils';
import { Heading } from './Heading';

const CenteredContent = styled.div`
	text-align: center;
	display: inline-block;
`;

const StyledLine = styled.div`
	width: 80%;
	border-bottom: 0.1rem solid ${getColor('primary')};
	margin-left: auto;
	margin-right: auto;
	${props => props.thick && css`border-width: .2rem`}
	@media only screen
	 and (min-width: ${props => props.theme.flexboxgrid.breakpoints.xs}em)
	 and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
        border-bottom: none;
}
`;

const UnderlinedHeading = ({ size, ...rest }) => (
	<CenteredContent>
		<Heading size={size} {...rest} />
		<StyledLine />
	</CenteredContent>
);
UnderlinedHeading.propTypes = {
	size: propTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
};
UnderlinedHeading.defaultProps = {
	size: 'large',
};

export { UnderlinedHeading };

export const UnderlinedXSmallHeading = props => <UnderlinedHeading size="xsmall" {...props} />;
export const UnderlinedSmallHeading = props => <UnderlinedHeading size="small" {...props} />;
export const UnderlinedMediumHeading = props => <UnderlinedHeading size="medium" {...props} />;
export const UnderlinedLargeHeading = props => <UnderlinedHeading size="large" {...props} />;
export const UnderlinedXLargeHeading = props => <UnderlinedHeading size="xlarge" {...props} />;
export const UnderlinedHugeHeading = props => <UnderlinedHeading size="huge" {...props} />;
