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
		border-bottom: 2px solid ${props => props.theme.colors.primary};
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

FrontSmallHeading.propTypes = {
	children: propTypes.oneOfType([
		propTypes.node,
		propTypes.arrayOf(propTypes.node),
	]).isRequired,
};

FrontMediumHeading.propTypes = {
	children: propTypes.oneOfType([
		propTypes.node,
		propTypes.arrayOf(propTypes.node),
	]).isRequired,
};

FrontLargeHeading.propTypes = {
	children: propTypes.oneOfType([
		propTypes.node,
		propTypes.arrayOf(propTypes.node),
	]).isRequired,
};

FrontXLargeHeading.propTypes = {
	children: propTypes.oneOfType([
		propTypes.node,
		propTypes.arrayOf(propTypes.node),
	]).isRequired,
};


FrontHugeHeading.propTypes = {
	children: propTypes.oneOfType([
		propTypes.node,
		propTypes.arrayOf(propTypes.node),
	]).isRequired,
};

export {
	FrontSmallHeading,
	FrontMediumHeading,
	FrontLargeHeading,
	FrontXLargeHeading,
	FrontHugeHeading,
};
