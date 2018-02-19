import { css } from 'styled-components';
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
    &:after {
		content: '';
		width: 100%;
		margin-left: ${props.theme.variables.headingSmallSize};
		display: inline-block;
		border-bottom: .2rem solid ${props.theme.colors[props.lineColor]};
		vertical-align: middle;
    }
`;


export const FrontSmallHeading = SmallHeading.extend`
	${FheadStyle}
	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingSmallSize};
	}
`;
export const FrontMediumHeading = MediumHeading.extend`
	${FheadStyle}
	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingMediumSize};
	}
`;
export const FrontLargeHeading = LargeHeading.extend`${FheadStyle}`;
export const FrontXLargeHeading = XLargeHeading.extend`${FheadStyle}`;
export const FrontHugeHeading = HugeHeading.extend`${FheadStyle}`;

const defaultProps = {
	textColor: 'type',
	lineColor: 'primary',
};

FrontSmallHeading.defaultProps = defaultProps;
FrontMediumHeading.defaultProps = defaultProps;
FrontLargeHeading.defaultProps = defaultProps;
FrontXLargeHeading.defaultProps = defaultProps;
FrontHugeHeading.defaultProps = defaultProps;
