import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Heading } from './Heading';

const CenteredContent = styled.div`
	text-align: center;
	display: inline-block;
`;

const StyledLine = styled.div`
	width: 80%;
	border-bottom: 0.1rem solid ${props => props.theme.colors.primary};
	margin-left: auto;
	margin-right: auto;
	${props => props.thick && css`border-width: .2rem`}
	
	@media only screen and (min-width: 360px) and (max-width: 1200px) {
        border-bottom: none;
}
`;

const UnderlinedHeading = ({ size, ...rest }) => (
	<CenteredContent>
		<Heading size={size} {...rest} />
		<StyledLine thick={['xlarge', 'huge'].includes(size)} />
	</CenteredContent>
);
UnderlinedHeading.propTypes = {
	size: propTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
};
UnderlinedHeading.defaultProps = {
	size: 'large',
};

export { UnderlinedHeading };
export const UnderlinedSmallHeading = props => <UnderlinedHeading size="small" {...props} />;
export const UnderlinedMediumHeading = props => <UnderlinedHeading size="medium" {...props} />;
export const UnderlinedLargeHeading = props => <UnderlinedHeading size="large" {...props} />;
export const UnderlinedXLargeHeading = props => <UnderlinedHeading size="xlarge" {...props} />;
export const UnderlinedHugeHeading = props => <UnderlinedHeading size="huge" {...props} />;
