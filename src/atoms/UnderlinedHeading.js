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

export {
	UnderlinedLargeHeading as UnderlinedHeading,
	UnderlinedLargeHeading,
	UnderlinedSmallHeading,
	UnderlinedMediumHeading,
	UnderlinedXLargeHeading,
	UnderlinedHugeHeading,
};
