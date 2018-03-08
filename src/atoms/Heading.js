import React from 'react';
import propTypes from 'prop-types';
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
		font-size: ${props => props.theme.variables[`heading${capSize}Size`]};
		line-height: ${props => props.theme.variables[`heading${capSize}LineHeight`]};
		margin:
			calc(${marginTopFactor} * ${props => props.theme.variables[`heading${capSize}LineHeight`]})
			0
			calc(${marginBottomFactor} * ${props => props.theme.variables[`heading${capSize}LineHeight`]})
		;
	`;
};

const SmallHeading = ProtoHeading.extend`
	${props => getSizes({ size: 'small', ...props })}

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		${props => getSizes({ size: 'regular', ...props })}
 	}
`;

const MediumHeading = ProtoHeading.extend`
	${props => getSizes({ size: 'medium', ...props })}

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		${props => getSizes({ size: 'regular', ...props })}
	}
`;

const LargeHeading = ProtoHeading.extend`
	${props => getSizes({ size: 'regular', ...props })}

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		${props => getSizes({ size: 'large', ...props })}
	}
`;

const XLargeHeading = ProtoHeading.extend`
	${props => getSizes({ size: 'regular', ...props })}

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		${props => getSizes({ size: 'xlarge', ...props })}
	}
`;

const HugeHeading = ProtoHeading.extend`
	${props => getSizes({ size: 'large', ...props })}

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		${props => getSizes({ size: 'huge', ...props })}
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
