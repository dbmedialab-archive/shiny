import React from 'react';
import styled, { css } from 'styled-components';

const ProtoHeading = styled.h1`
	padding: 0;
	color: ${props => props.theme.colors.type};
	font-weight: 700;
	font-family: ${props => props.theme.variables.headingsFont};

	${props => props.ALLCAPS && css`
		text-transform: uppercase;
	`}

	a {
		color: inherit;
	}
`;

const SmallHeading = ProtoHeading.extend`
	font-size: ${props => props.theme.variables.headingSmallSize};
	line-height: ${props => props.theme.variables.headingSmallLineHeight};

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingRegularSize};
 		line-height: ${props => props.theme.variables.headingRegularLineHeight};
 	}
`;

const MediumHeading = ProtoHeading.extend`
	font-size: ${props => props.theme.variables.headingMediumSize};
	line-height: ${props => props.theme.variables.headingMediumLineHeight};

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingRegularSize};
		line-height: ${props => props.theme.variables.headingRegularLineHeight};
	}
`;

const LargeHeading = ProtoHeading.extend`
	font-size: ${props => props.theme.variables.headingRegularSize};
	line-height: ${props => props.theme.variables.headingRegularLineHeight};

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingLargeSize};
		line-height: ${props => props.theme.variables.headingLargeLineHeight};
	}
`;

const XLargeHeading = ProtoHeading.extend`
	font-size: ${props => props.theme.variables.headingRegularSize};
	line-height: ${props => props.theme.variables.headingRegularLineHeight};

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingXlargeSize};
		line-height: ${props => props.theme.variables.headingXlargeLineHeight};
	}
`;

const HugeHeading = ProtoHeading.extend`
	font-size: ${props => props.theme.variables.headingLargeSize};
	line-height: ${props => props.theme.variables.headingLargeLineHeight};

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingHugeSize};
		line-height: ${props => props.theme.variables.headingHugeLineHeight};
	}
`;

const Heading = ({ size, ...rest }) => {
	switch (size) {
	case 'small':
		return <SmallHeading {...rest} />;
	case 'medium':
		return <MediumHeading {...rest} />;
	case 'large':
		return <LargeHeading {...rest} />;
	case 'xlarge':
		return <XLargeHeading {...rest} />;
	case 'huge':
		return <HugeHeading {...rest} />;
	default:
		return <LargeHeading {...rest} />;
	}
};

export {
	Heading,

	SmallHeading,
	MediumHeading,
	LargeHeading,
	XLargeHeading,
	HugeHeading,
};
