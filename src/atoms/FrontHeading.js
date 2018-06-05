import styled, { css } from 'styled-components';
import {
	SmallHeading,
	MediumHeading,
	LargeHeading,
	XLargeHeading,
	HugeHeading,
} from './Heading';

const FheadStyle = props => css`
    color: ${props.theme.colors[props.textColor]};
    display: block;
    white-space: nowrap;
	overflow: hidden;
	text-transform: uppercase;
	letter-spacing: .03125rem;
    &:after {
		content: '';
		width: ${props.lineWidth ? `${props.lineWidth}rem` : '100%'};
		margin-left: ${props.theme.variables.headingSmallSize};
		display: inline-block;
		border-bottom: .2rem solid ${props.theme.colors[props.lineColor]};
		vertical-align: middle;
    }
`;

const FrontSmallHeading = styled(SmallHeading)`
	${FheadStyle}
	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingSmallSize};
	}
`;

const FrontMediumHeading = styled(MediumHeading)`
	${FheadStyle}
	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingMediumSize};
	}
`;
const FrontLargeHeading = styled(LargeHeading)`
	${FheadStyle}
	font-size: ${props => props.theme.variables.headingMediumSize};
	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingLargeSize};
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
FrontLargeHeading.defaultProps  = Object.assign({}, LargeHeading.defaultProps, defaultProps);
FrontXLargeHeading.defaultProps = Object.assign({}, XLargeHeading.defaultProps, defaultProps);
FrontHugeHeading.defaultProps   = Object.assign({}, HugeHeading.defaultProps, defaultProps);

export {
	FrontSmallHeading,
	FrontMediumHeading,
	FrontLargeHeading,
	FrontXLargeHeading,
	FrontHugeHeading,
};
