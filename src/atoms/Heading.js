import styled from 'styled-components';

const Heading = styled.h1`
	padding: 0;
	color: ${props => props.theme.colors.type};
	font-weight: 700;
	font-family: ${props => props.theme.variables.mainFont};

	a {
		color: inherit;
	}
`;

const SmallHeading = Heading.extend`
	font-size: ${props => props.theme.variables.headingSmallSize};
	line-height: ${props => props.theme.variables.headingSmallLineHeight};

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingRegularSize};
		line-height: ${props => props.theme.variables.headingRegularLineHeight};
	}
`;

const MediumHeading = Heading.extend`
	font-size: ${props => props.theme.variables.headingMediumSize};
	line-height: ${props => props.theme.variables.headingMediumLineHeight};

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingRegularSize};
		line-height: ${props => props.theme.variables.headingRegularLineHeight};
	}
`;

const LargeHeading = Heading.extend`
	font-size: ${props => props.theme.variables.headingRegularSize};
	line-height: ${props => props.theme.variables.headingRegularLineHeight};

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingLargeSize};
		line-height: ${props => props.theme.variables.headingLargeLineHeight};
	}
`;

const XLargeHeading = Heading.extend`
	font-size: ${props => props.theme.variables.headingRegularSize};
	line-height: ${props => props.theme.variables.headingRegularLineHeight};

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingXlargeSize};
		line-height: ${props => props.theme.variables.headingXlargeLineHeight};
	}
`;

const HugeHeading = Heading.extend`
	font-size: ${props => props.theme.variables.headingLargeSize};
	line-height: ${props => props.theme.variables.headingLargeLineHeight};

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingHugeSize};
		line-height: ${props => props.theme.variables.headingHugeLineHeight};
	}
`;

export {
	LargeHeading as Heading,

	SmallHeading,
	MediumHeading,
	LargeHeading,
	XLargeHeading,
	HugeHeading,
};
