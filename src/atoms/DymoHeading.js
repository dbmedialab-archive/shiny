import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import shinyPropTypes from '../prop-types';
import { getColor, getVariable } from '../utils';

import { Heading } from './Heading';

const Hgroup = styled.hgroup`
	/* Fixes vertical spacing */
	display: flex;
`;

const FormattedHeading = styled(Heading)`
	&& {
	  display: inline-block;
	  margin:
			${props => (props.needsPadding ? '0' : `calc(1/3 * ${getVariable('verticalBase')(props)})`)}
			0
			calc(2/3 * ${getVariable('verticalBase')});

	  ${props => (props.hasImage
		? 'max-width: 90%;'
		: css`max-width: calc(100% - ${getVariable('horizontalBase')(props)});`)
}

		a:hover && {
			text-decoration: none;
		}

		${Hgroup}:last-child & {
			margin: 0;
		}
	}
`;

const PaddedText = styled.span`
	${(props) => {
		const horizontalBase = getVariable('horizontalBase')(props);
		const backgroundColor = getColor(props.skin.backgroundColor)(props);
		const textColor = getColor(props.skin.textColor)(props);
		const textHoverColor = getColor(props.skin.textColor, props.skin.textHoverShade)(props);
		const backgroundHoverColor = getColor(props.skin.backgroundColor, props.skin.backgroundHoverShade)(props);
		const textHighlightColor = getColor('red')(props);

		return css`
			${props.hasImage ? '' : 'max-width: 100%;'}
			margin: 0;
			padding-top: 0;
			box-shadow:
				calc(1/2 * ${horizontalBase})
				0
				${backgroundColor}
			;
			background: ${backgroundColor};
			color: ${textColor};
			-webkit-box-decoration-break: clone;

			span.highlighted {
				color: ${textHighlightColor};
			}

			padding-left: ${props.skin.needsPadding ? `calc(1/2 * ${horizontalBase})` : '0'};

			a:hover & {
				color: ${textHoverColor};
				background: ${backgroundHoverColor};
				box-shadow:
					calc(1/2 * ${horizontalBase})
					0
					${backgroundHoverColor}
				;
			}
		`;
	}}
`;

PaddedText.propTypes = {
	skin: propTypes.shape({
		backgroundColor: shinyPropTypes.color,
		backgroundHoverShade: shinyPropTypes.shade,
		needsPadding: propTypes.bool,
		textColor: shinyPropTypes.color,
		textHoverShade: shinyPropTypes.shade,
	}),
};
PaddedText.defaultProps = {
	skin: {
		backgroundColor: 'transparent',
		backgroundHoverShade: 'dark',
		needsPadding: false,
		textColor: 'type',
		textHoverShade: '',
	},
};

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
			<FormattedHeading {...rest} needsPadding={skin.needsPadding}>
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
		backgroundColor: shinyPropTypes.color,
		backgroundHoverShade: shinyPropTypes.shade,
		needsPadding: propTypes.bool,
		textColor: shinyPropTypes.color,
		textHoverShade: shinyPropTypes.shade,
	}),
	title: propTypes.string,
};

DymoHeading.defaultProps = {
	children: null,
	hasImage: false,
	size: 'large',
	skin: {
		backgroundColor: 'transparent',
		backgroundHoverShade: 'dark',
		needsPadding: false,
		textColor: 'type',
		textHoverShade: '',
	},
	title: '',
};

export { DymoHeading };
export const SmallDymoHeading  = props => <DymoHeading size="small" {...props} />;
export const MediumDymoHeading = props => <DymoHeading size="medium" {...props} />;
export const LargeDymoHeading  = props => <DymoHeading size="large" {...props} />;
export const XLargeDymoHeading = props => <DymoHeading size="xlarge" {...props} />;
export const HugeDymoHeading   = props => <DymoHeading size="huge" {...props} />;
