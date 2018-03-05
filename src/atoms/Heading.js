import React from 'react';
import styled, { css } from 'styled-components';

const ProtoHeading = styled.h1`
	padding: 0;
	color: ${props => props.theme.colors.type};
	font-weight: 700;
	font-family: ${props => props.theme.variables.headingsFont};

	${props => props.ALLCAPS && css`
		text-transform: uppercase;
	`}

	a {
		color: inherit;
	}
`;

const getSizes = ({ size }) => {
	const capSize = size.slice(0, 1).toUpperCase() + size.slice(1);
	return css`
		font-size: ${props => props.theme.variables[`heading${capSize}Size`]};
		line-height: ${props => props.theme.variables[`heading${capSize}LineHeight`]};
		margin:
			calc(1/4 * ${props => props.theme.variables[`heading${capSize}LineHeight`]})
			0
			calc(1/2 * ${props => props.theme.variables[`heading${capSize}LineHeight`]})
		;
	`;
};

const SmallHeading = ProtoHeading.extend`
	${getSizes({ size: 'small' })}

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		${getSizes({ size: 'regular' })}
 	}
`;

const MediumHeading = ProtoHeading.extend`
	${getSizes({ size: 'medium' })}

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		${getSizes({ size: 'regular' })}
	}
`;

const LargeHeading = ProtoHeading.extend`
	${getSizes({ size: 'regular' })}

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		${getSizes({ size: 'large' })}
	}
`;

const XLargeHeading = ProtoHeading.extend`
	${getSizes({ size: 'regular' })}

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		${getSizes({ size: 'xlarge' })}
	}
`;

const HugeHeading = ProtoHeading.extend`
	${getSizes({ size: 'large' })}

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		${getSizes({ size: 'huge' })}
	}
`;

const Heading = ({ size, ...rest }) => {
	switch (size) {
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

	SmallHeading,
	MediumHeading,
	LargeHeading,
	XLargeHeading,
	HugeHeading,
};
