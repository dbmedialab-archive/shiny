import React from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';

import { Heading } from '..';

const FormattedHeading = styled(Heading)`
  display: inline-block;
  margin: 0 0 calc(2/3*${props => props.theme.variables.verticalBase});
  ${props => (props.hasImage ? 'max-width: 90%;' : `max-width: calc(100% - ${props.theme.variables.horizontalBase});`)}

  @media (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
		${props => ((props.flexingSize === 'full')
		? css`
			margin-top: 0;
			font-size: ${props.theme.variables.headingXlargeSize};
			line-height: ${props.theme.variables.headingXlargeLineHeight};
			`
		:	''
	)};
		}
`;

const PaddedText = styled.span`
	${props => (props.hasImage ? '' : 'max-width: 100%;')}
	 	margin: 0;
		padding-top: 0;
		box-shadow:
			calc(1/2*${props => props.theme.variables.horizontalBase})
			0
		  ${props           => props.theme.colors[props.theme.colors.skinColors[props.skin.backgroundColor]]}
		;
		background: ${props => props.theme.colors[props.theme.colors.skinColors[props.skin.backgroundColor]]};
		color:      ${props => props.theme.colors[props.theme.colors.skinColors[props.skin.textColor]]};
		-webkit-box-decoration-break: clone;

		span.highlighted {
			color: ${props => props.theme.colors.red};
		}

		padding-left: ${props => (props.skin.needsPadding ? `calc(1/2*${props.theme.variables.horizontalBase})` : '0')};

		a:hover & {
			padding-left: ${props => (props.skin.needsPadding ? `calc(1/2*${props.theme.variables.horizontalBase})` : '0')};
		}
`;
PaddedText.propTypes = {
	skin: propTypes.shape({
		backgroundColor: propTypes.string,
		textColor: propTypes.string,
		needsPadding: propTypes.bool,
	}),
};
PaddedText.defaultProps = {
	skin: {
		textColor: 'type',
		needsPadding: false,
		backgroundColor: 'transparent',
	},
};


const SkinHeading = (props) => {
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
		<hgroup>
			<FormattedHeading
				{...rest}
			>
				<PaddedText
					skin={{ ...skin }}
					dangerouslySetInnerHTML={{ __html: children || title }}
				/>
			</FormattedHeading>
		</hgroup>
	);
};

SkinHeading.propTypes = {
	children: propTypes.node,
	flexingSize: propTypes.string,
	hasImage: propTypes.bool,
	size: propTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
	skin: propTypes.shape({
		backgroundColor: propTypes.string,
		textColor: propTypes.string,
		shouldTextBePadded: propTypes.bool,
	}),
	title: propTypes.string,
};

SkinHeading.defaultProps = {
	children: null,
	flexingSize: 'small',
	hasImage: false,
	size: 'large',
	skin: {
		textColor: 'type',
		shouldTextBePadded: false,
		backgroundColor: 'transparent',
	},
	title: '',
};

export { SkinHeading };
export const SmallSkinHeading = props => <SkinHeading size="small" {...props} />;
export const MediumSkinHeading = props => <SkinHeading size="medium" {...props} />;
export const LargeSkinHeading = props => <SkinHeading size="large" {...props} />;
export const XLargeSkinHeading = props => <SkinHeading size="xlarge" {...props} />;
export const HugeSkinHeading = props => <SkinHeading size="huge" {...props} />;
