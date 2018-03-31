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
	letter-spacing: .03125rem;
    &:after {
		content: '';
		width: ${props.lineWidth ? `${props.lineWidth}rem` : '100%'};
		margin-left: ${props.theme.variables.headingSmallSize};
		display: inline-block;
		border-bottom: .2rem solid ${props.theme.colors[props.lineColor]};
		vertical-align: middle;
		
		@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}rem) {
			width:100%;
		}
    }
`;


export const FrontSmallHeading = SmallHeading.extend`
	${FheadStyle}
	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingSmallSize};
	}
	
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}rem) {
		font-size: ${props => props.theme.variables.headingSmallSizeMobile};
		line-height: ${props => props.theme.variables.headingSmallLineHeightMobile};
	}
`;
export const FrontMediumHeading = MediumHeading.extend`
	${FheadStyle}
	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		font-size: ${props => props.theme.variables.headingMediumSize};
	}
		
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}rem) {
		font-size: ${props => props.theme.variables.headingSmallSizeMobile};
		line-height: ${props => props.theme.variables.headingSmallLineHeightMobile};
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
