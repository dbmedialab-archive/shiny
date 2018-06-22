import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getColor, getVariable } from '../utils';

const ProtoHeading = styled.h1`
	padding: 0;
	color: ${getColor('heading')};
	font-weight: ${getVariable('headingsWeight')};
	font-family: ${getVariable('headingsFont')};

	${props => props.ALLCAPS && css`
		text-transform: uppercase;
		letter-spacing: .1rem;
	`}

	a {
		color: inherit;
	}
`;
ProtoHeading.propTypes = {
	marginTopFactor: propTypes.number,
	marginBottomFactor: propTypes.number,
};
ProtoHeading.defaultProps = {
	marginTopFactor: 3/4,
	marginBottomFactor: 1/2,
};

const getSizes = ({ size, marginTopFactor, marginBottomFactor }) => {
	const capSize = size.slice(0, 1).toUpperCase() + size.slice(1);
	return css`
		font-size: ${getVariable(`heading${capSize}Size`)};
		line-height: ${getVariable(`heading${capSize}LineHeight`)};
		margin:
			calc(${marginTopFactor} * ${getVariable(`heading${capSize}LineHeight`)})
			0
			calc(${marginBottomFactor} * ${getVariable(`heading${capSize}LineHeight`)})
		;
	`;
};

const XSmallHeading = styled(ProtoHeading)`
	${props => getSizes({ size: 'small', ...props })}

	@media screen and (min-width: ${getVariable('largeWidth')}) {
		${props => getSizes({ size: 'medium', ...props })}
 	}
`;

const SmallHeading = styled(ProtoHeading)`
	${props => getSizes({ size: 'small', ...props })}

	@media screen and (min-width: ${getVariable('largeWidth')}) {
		${props => getSizes({ size: 'regular', ...props })}
 	}
`;

const MediumHeading = styled(ProtoHeading)`
	${props => getSizes({ size: 'medium', ...props })}

	@media screen and (min-width: ${getVariable('largeWidth')}) {
		${props => getSizes({ size: 'regular', ...props })}
	}
`;

const LargeHeading = styled(ProtoHeading)`
	${props => getSizes({ size: 'regular', ...props })}

	@media screen and (min-width: ${getVariable('largeWidth')}) {
		${props => getSizes({ size: 'large', ...props })}
	}
`;

const XLargeHeading = styled(ProtoHeading)`
	${props => getSizes({ size: 'regular', ...props })}

	@media screen and (min-width: ${getVariable('largeWidth')}) {
		${props => getSizes({ size: 'xlarge', ...props })}
	}
`;

const HugeHeading = styled(ProtoHeading)`
	${props => getSizes({ size: 'large', ...props })}

	@media screen and (min-width: ${getVariable('largeWidth')}) {
		${props => getSizes({ size: 'huge', ...props })}
	}
`;

XSmallHeading.propTypes = ProtoHeading.propTypes;
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

const Heading = ({ size, ...rest }) => {
	switch (size) {
	case 'xsmall':
		return <XSmallHeading {...rest} />;
	case 'small':
		return <SmallHeading {...rest} />;
	case 'medium':
		return <MediumHeading {...rest} />;
	case 'large':
		return <LargeHeading {...rest} />;
	case 'xlarge':
		return <XLargeHeading {...rest} />;
	case 'huge':
		return <HugeHeading {...rest} />;
	default:
		return <LargeHeading {...rest} />;
	}
};

export {
	Heading,

	XSmallHeading,
	SmallHeading,
	MediumHeading,
	LargeHeading,
	XLargeHeading,
	HugeHeading,
};
