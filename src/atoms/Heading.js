import React from 'react';
import propTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { getColor, getVariable } from '../utils';

const ProtoHeading = styled.h1`
	${(props) => {
		const headingDefaultSize = getVariable(`heading${props.defaultSize}Size`)(props);
		const headingDefaultLineHeight = getVariable(`heading${props.defaultSize}LineHeight`)(props);
		const headingUpSize = getVariable(`heading${props.upSize}Size`)(props);
		const headingUpLineHeight = getVariable(`heading${props.upSize}LineHeight`)(props);

		return css`
				padding: 0;
				color: ${getColor('heading')(props)};
				font-weight: ${getVariable('headingsWeight')(props)};
				font-family: ${getVariable('headingsFont')(props)};

				${props.ALLCAPS && `
					text-transform: uppercase;
					letter-spacing: .1rem;
				`}

				a {
					color: inherit;
				}

				font-size: ${headingDefaultSize};
				line-height: ${headingDefaultLineHeight};
				margin:
					calc(${props.marginTopFactor} * ${headingDefaultLineHeight})
					0
					calc(${props.marginBottomFactor} * ${headingDefaultLineHeight})
				;

				${props.maxLines && `
					display: -webkit-box;
					-webkit-box-orient: vertical;
					white-space: normal;
					overflow: hidden;
					-webkit-line-clamp: ${props.maxLines};
					max-height: calc(${headingDefaultLineHeight} * (${props.maxLines} + 0.1));

					@media screen and (min-width: ${props.theme.flexboxgrid.breakpoints.sm}rem) {
						max-height: calc(${headingUpLineHeight} * (${props.maxLines} + 0.1));
					}
				`};

				@media screen and (min-width: ${props.theme.flexboxgrid.breakpoints.sm}rem) {
					font-size: ${headingUpSize};
					line-height: ${headingUpLineHeight};
					margin:
						calc(${props.marginTopFactor} * ${headingUpLineHeight})
						0
						calc(${props.marginBottomFactor} * ${headingUpLineHeight})
					;
				}
			`;
	}
}
`;

ProtoHeading.propTypes = {
	marginTopFactor: propTypes.number,
	marginBottomFactor: propTypes.number,
	defaultSize: propTypes.string,
	upSize: propTypes.string,
	maxLines: propTypes.number,
};
ProtoHeading.defaultProps = {
	marginTopFactor: 3/4,
	marginBottomFactor: 1/2,
	defaultSize: 'Regular',
	upSize: 'Large',
	maxLines: 0,
};

const Heading = ({ size, ...rest }) => {
	switch (size) {
	case 'xsmall':
		return <ProtoHeading {...rest} defaultSize="Small" upSize="Medium" />;
	case 'small':
		return <ProtoHeading {...rest} defaultSize="Small" upSize="Regular" />;
	case 'medium':
		return <ProtoHeading {...rest} defaultSize="Medium" upSize="Regular" />;
	case 'large':
		return <ProtoHeading {...rest} defaultSize="Regular" upSize="Large" />;
	case 'xlarge':
		return <ProtoHeading {...rest} defaultSize="Regular" upSize="Xlarge" />;
	case 'huge':
		return <ProtoHeading {...rest} defaultSize="Large" upSize="Huge" />;
	default:
		// Same as 'large'
		return <ProtoHeading {...rest} defaultSize="Regular" upSize="Large" />;
	}
};

const XSmallHeading = props => <Heading size="xsmall" {...props} />;
const SmallHeading = props => <Heading size="small" {...props} />;
const MediumHeading = props => <Heading size="medium" {...props} />;
const LargeHeading = props => <Heading size="large" {...props} />;
const XLargeHeading = props => <Heading size="xlarge" {...props} />;
const HugeHeading = props => <Heading size="huge" {...props} />;

Heading.displayName       = 'Heading';
SmallHeading.displayName  = 'SmallHeading';
MediumHeading.displayName = 'MediumHeading';
LargeHeading.displayName  = 'LargeHeading';
XLargeHeading.displayName = 'XLargeHeading';
HugeHeading.displayName   = 'HugeHeading';

SmallHeading.propTypes  = ProtoHeading.propTypes;
MediumHeading.propTypes = ProtoHeading.propTypes;
LargeHeading.propTypes  = ProtoHeading.propTypes;
XLargeHeading.propTypes = ProtoHeading.propTypes;
HugeHeading.propTypes   = ProtoHeading.propTypes;

XSmallHeading.defaultProps = ProtoHeading.defaultProps;
SmallHeading.defaultProps  = ProtoHeading.defaultProps;
MediumHeading.defaultProps = ProtoHeading.defaultProps;
LargeHeading.defaultProps  = ProtoHeading.defaultProps;
XLargeHeading.defaultProps = ProtoHeading.defaultProps;
HugeHeading.defaultProps   = ProtoHeading.defaultProps;

export {
	Heading,
	XSmallHeading,
	SmallHeading,
	MediumHeading,
	LargeHeading,
	XLargeHeading,
	HugeHeading,
};
