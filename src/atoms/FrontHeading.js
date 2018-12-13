import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { getColor, getVariable } from '../utils';

import {
	SmallHeading,
	MediumHeading,
	LargeHeading,
	XLargeHeading,
	HugeHeading,
} from './Heading';

const FheadStyle = props => css`
	color: ${getColor(props.textColor)(props)};
	display: block;
	white-space: nowrap;
	overflow: hidden;
	text-transform: uppercase;
	letter-spacing: .03125rem;

	&:after {
		content: '';
		width: ${props.lineWidth ? `${props.lineWidth}rem` : '100%'};
		margin-left: ${getVariable('headingSmallSize')(props)};
		display: inline-block;
		border-bottom: .2rem solid ${getColor(props.lineColor)(props)};
		vertical-align: middle;
	}
`;

const FrontSmallHeading = styled(SmallHeading)`
	${FheadStyle}
	@media screen and (min-width: ${props => getVariable('largeWidth')(props)}) {
		font-size: ${props => getVariable('headingSmallSize')(props)};
	}
`;

const FrontMediumHeading = styled(MediumHeading)`
	${FheadStyle}
	@media screen and (min-width: ${props => getVariable('largeWidth')(props)}) {
		font-size: ${props => getVariable('headingMediumSize')(props)};
	}
`;

const FrontRegularHeading = styled(MediumHeading)`${FheadStyle}`;

const FrontLargeHeading = styled(LargeHeading)`
	${FheadStyle}
	font-size: ${props => getVariable('headingMediumSize')(props)};
	@media screen and (min-width: ${props => getVariable('largeWidth')(props)}) {
		font-size: ${props => getVariable('headingLargeSize')(props)};
	}
`;
const FrontXLargeHeading = styled(XLargeHeading)`${FheadStyle}`;
const FrontHugeHeading = styled(HugeHeading)`${FheadStyle}`;

const defaultProps = {
	textColor: 'type',
	lineColor: 'primary',
};

FrontSmallHeading.defaultProps  = Object.assign({}, SmallHeading.defaultProps, defaultProps);
FrontMediumHeading.defaultProps = Object.assign({}, MediumHeading.defaultProps, defaultProps);
FrontRegularHeading.defaultProps = Object.assign({}, FrontRegularHeading.defaultProps, defaultProps);
FrontLargeHeading.defaultProps  = Object.assign({}, LargeHeading.defaultProps, defaultProps);
FrontXLargeHeading.defaultProps = Object.assign({}, XLargeHeading.defaultProps, defaultProps);
FrontHugeHeading.defaultProps   = Object.assign({}, HugeHeading.defaultProps, defaultProps);

export {
	FrontSmallHeading,
	FrontMediumHeading,
	FrontLargeHeading,
	FrontXLargeHeading,
	FrontHugeHeading,
	FrontRegularHeading,
};
