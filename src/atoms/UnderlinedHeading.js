import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
	SmallHeading,
	MediumHeading,
	LargeHeading,
	XLargeHeading,
	HugeHeading,
} from './Heading';

const XSmallHeading = SmallHeading.extend`
	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingSmallSize};
		line-height: ${props => props.theme.variables.headingSmallLineHeight};
	}
`;

const CenteredContent = styled.div`
text-align: center;
display: inline-block;
`;

const StyledLine = styled.div`
width: 80%;
border-bottom: 1px solid ${props => props.theme.colors.primary};
margin-left: auto;
margin-right: auto;
`;
const ThickStyledLine = StyledLine.extend`
border-width: 2px;
`;

const UnderlinedSmallHeading = ({ children }) => (
	<CenteredContent>
		<XSmallHeading>{children}</XSmallHeading>
		<StyledLine />
	</CenteredContent>
);

const UnderlinedMediumHeading = ({ children }) => (
	<CenteredContent>
		<MediumHeading>{children}</MediumHeading>
		<StyledLine />
	</CenteredContent>
);

const UnderlinedLargeHeading = ({ children }) => (
	<CenteredContent>
		<LargeHeading>{children}</LargeHeading>
		<StyledLine />
	</CenteredContent>
);
const UnderlinedXLargeHeading = ({ children }) => (
	<CenteredContent>
		<XLargeHeading>{children}</XLargeHeading>
		<ThickStyledLine />
	</CenteredContent>
);

const UnderlinedHugeHeading = ({ children }) => (
	<CenteredContent>
		<HugeHeading>{children}</HugeHeading>
		<ThickStyledLine />
	</CenteredContent>
);

UnderlinedLargeHeading.propTypes = {
	children: propTypes.oneOfType([
		propTypes.node,
		propTypes.arrayOf(propTypes.node),
	]).isRequired,
};

UnderlinedSmallHeading.propTypes = {
	children: propTypes.oneOfType([
		propTypes.node,
		propTypes.arrayOf(propTypes.node),
	]).isRequired,
};

UnderlinedMediumHeading.propTypes = {
	children: propTypes.oneOfType([
		propTypes.node,
		propTypes.arrayOf(propTypes.node),
	]).isRequired,
};

UnderlinedXLargeHeading.propTypes = {
	children: propTypes.oneOfType([
		propTypes.node,
		propTypes.arrayOf(propTypes.node),
	]).isRequired,
};


UnderlinedHugeHeading.propTypes = {
	children: propTypes.oneOfType([
		propTypes.node,
		propTypes.arrayOf(propTypes.node),
	]).isRequired,
};

export {
	UnderlinedLargeHeading as UnderlinedHeading,
	UnderlinedLargeHeading,
	UnderlinedSmallHeading,
	UnderlinedMediumHeading,
	UnderlinedXLargeHeading,
	UnderlinedHugeHeading,
};
