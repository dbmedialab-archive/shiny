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

const Fhead = styled.div`
	white-space: nowrap;
    overflow: hidden;
    & h1 {
    	display: block;
    }
    & h1:after {
		content: '';
		width: 100%;
		margin-left: 10px;
		display: inline-block;
		border-bottom: 3px solid ${props => props.theme.colors.primary};
		vertical-align: middle;
    }
`;

const FrontSmallHeading = ({ children }) => (
	<Fhead>
		<SmallHeading>{children}</SmallHeading>
	</Fhead>
);

const FrontMediumHeading = ({ children }) => (
	<Fhead>
		<MediumHeading>{children}</MediumHeading>
	</Fhead>
);

const FrontLargeHeading = ({ children }) => (
	<Fhead>
		<LargeHeading>{children}</LargeHeading>
	</Fhead>
);

const FrontXLargeHeading = ({ children }) => (
	<Fhead>
		<XLargeHeading>{children}</XLargeHeading>
	</Fhead>
);

const FrontHugeHeading = ({ children }) => (
	<Fhead>
		<HugeHeading>{children}</HugeHeading>
	</Fhead>
);

export {
	FrontSmallHeading,
	FrontMediumHeading,
	FrontLargeHeading,
	FrontXLargeHeading,
	FrontHugeHeading,
};
