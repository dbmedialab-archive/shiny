import React from 'react';
import styled from 'styled-components';
import {Heading,
		SmallHeading,
		MediumHeading,
		LargeHeading,
		XLargeHeading,
		HugeHeading,
} from './Heading';

const CenteredContent = styled.div`
text-align: center;
`

const StyledLine = styled.div`
width: 80%;
border-bottom: 1px solid ${props => props.theme.colors.primary};
margin-left: auto;
margin-right: auto;
`
const ThickStyledLine = StyledLine.extend`
border-width: 2px;
`

const UnderlinedHeading = ({children}) => (
	<CenteredContent>
		<Heading>{children}</Heading>
		<StyledLine/>
	</CenteredContent>
);

const UnderlinedSmallHeading = ({children}) => (
	<CenteredContent>
		<SmallHeading>{children}</SmallHeading>
		<StyledLine/>
	</CenteredContent>
);

const UnderlinedMediumHeading = ({children}) => (
	<CenteredContent>
		<MediumHeading>{children}</MediumHeading>
		<StyledLine/>
	</CenteredContent>
);

const UnderlinedLargeHeading = ({children}) => (
	<CenteredContent>
		<LargeHeading>{children}</LargeHeading>
		<StyledLine/>
	</CenteredContent>
);
const UnderlinedXLargeHeading = ({children}) => (
	<CenteredContent>
		<XLargeHeading>{children}</XLargeHeading>
		<ThickStyledLine/>
	</CenteredContent>
);

const UnderlinedHugeHeading = ({children}) => (
	<CenteredContent>
		<HugeHeading>{children}</HugeHeading>
		<ThickStyledLine/>
	</CenteredContent>
);

/*
const UnderlinedSmallHeading = Heading.extend`
	font-size: ${props => props.theme.variables.headingSmallSize};
	line-height: ${props => props.theme.variables.headingSmallLineHeight};

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingRegularSize};
		line-height: ${props => props.theme.variables.headingRegularLineHeight};
	}
`;

const UnderlinedMediumHeading = Heading.extend`
	font-size: ${props => props.theme.variables.headingMediumSize};
	line-height: ${props => props.theme.variables.headingMediumLineHeight};

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingRegularSize};
		line-height: ${props => props.theme.variables.headingRegularLineHeight};
	}
`;

const UnderlinedLargeHeading = Heading.extend`
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
*/
export {
	UnderlinedLargeHeading as UnderlinedHeading,
	UnderlinedLargeHeading,
	UnderlinedSmallHeading,
	UnderlinedMediumHeading,
	UnderlinedXLargeHeading,
	UnderlinedHugeHeading,
};
