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


export const FrontSmallHeading = styled(SmallHeading)`
	${FheadStyle}
	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingSmallSize};
	}
`;
export const FrontMediumHeading = styled(MediumHeading)`
	${FheadStyle}
	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingMediumSize};
	}
`;
export const FrontLargeHeading = styled(LargeHeading)`
	${FheadStyle}
	font-size: ${props => props.theme.variables.headingMediumSize};
	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingLargeSize};
	}
`;
export const FrontXLargeHeading = styled(XLargeHeading)`${FheadStyle}`;
export const FrontHugeHeading = styled(HugeHeading)`${FheadStyle}`;

const defaultProps = {
	textColor: 'type',
	lineColor: 'primary',
};

FrontSmallHeading.defaultProps = defaultProps;
FrontMediumHeading.defaultProps = defaultProps;
FrontLargeHeading.defaultProps = defaultProps;
FrontXLargeHeading.defaultProps = defaultProps;
FrontHugeHeading.defaultProps = defaultProps;
