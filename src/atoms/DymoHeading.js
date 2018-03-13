import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { getColor, getVariable } from '../utils';

import { Heading } from '..';

const FormattedHeading = styled(Heading)`
  display: inline-block;
  margin: 0 0 calc(2/3*${props => props.theme.variables.verticalBase});
  ${props => (props.hasImage ? 'max-width: 90%;' : `max-width: calc(100% - ${props.theme.variables.horizontalBase});`)}
`;

const PaddedText = styled.span`
	${props => (props.hasImage ? '' : 'max-width: 100%;')}
	 	margin: 0;
		padding-top: 0;
		box-shadow:
			calc(1/2 * ${getVariable('horizontalBase')})
			0
		  ${props => getColor(props.skin.backgroundColor)}
		;
		background: ${props => getColor(props.skin.backgroundColor)};
		color:      ${props => getColor(props.skin.textColor)};
		-webkit-box-decoration-break: clone;

		span.highlighted {
			color: ${getColor('red')};
		}

		padding-left: ${props => (props.skin.needsPadding ? `calc(1/2 * ${props.theme.variables.horizontalBase})` : '0')};

		a:hover & {
			background: ${props => getColor(props.skin.backgroundColor, props.skin.backgroundHoverShade)};
			box-shadow:
				calc(1/2 * ${getVariable('horizontalBase')})
				0
				${props => getColor(props.skin.backgroundColor, props.skin.backgroundHoverShade)}
			;
		}
		a:hover h1 & {
			text-decoration: none;
		}
`;
PaddedText.propTypes = {
	skin: propTypes.shape({
		backgroundColor: propTypes.string,
		backgroundHoverShade: propTypes.string,
		textColor: propTypes.string,
		needsPadding: propTypes.bool,
	}),
};
PaddedText.defaultProps = {
	skin: {
		textColor: 'type',
		needsPadding: false,
		backgroundColor: 'transparent',
		backgroundHoverShade: 'dark',
	},
};

const Hgroup = styled.hgroup`
	/* Fixes vertical spacing */
	display: flex;
`;

const DymoHeading = (props) => {
	const {
		children,
		skin,
		title,
		...rest
	} = props;

	if (!children && !title) {
		return null;
	}

	/* eslint-disable react/no-danger */
	return (
		<Hgroup>
			<FormattedHeading {...rest}>
				<PaddedText
					skin={{ ...skin }}
					dangerouslySetInnerHTML={{ __html: children || title }}
				/>
			</FormattedHeading>
		</Hgroup>
	);
};

DymoHeading.propTypes = {
	children: propTypes.node,
	hasImage: propTypes.bool,
	size: propTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
	skin: propTypes.shape({
		backgroundColor: propTypes.string,
		textColor: propTypes.string,
		shouldTextBePadded: propTypes.bool,
	}),
	title: propTypes.string,
};

DymoHeading.defaultProps = {
	children: null,
	hasImage: false,
	size: 'large',
	skin: {
		textColor: 'type',
		shouldTextBePadded: false,
		backgroundColor: 'transparent',
	},
	title: '',
};

export { DymoHeading };
export const SmallDymoHeading  = props => <DymoHeading size="small"  {...props} />;
export const MediumDymoHeading = props => <DymoHeading size="medium" {...props} />;
export const LargeDymoHeading  = props => <DymoHeading size="large"  {...props} />;
export const XLargeDymoHeading = props => <DymoHeading size="xlarge" {...props} />;
export const HugeDymoHeading   = props => <DymoHeading size="huge"   {...props} />;
