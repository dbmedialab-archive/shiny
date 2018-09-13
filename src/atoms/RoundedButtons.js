import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { withTheme } from 'emotion-theming';

import { getColor, getVariable } from '../utils';

const styles = (props) => {
	const mainFont = getVariable('mainFont')(props);
	const fontWeight = getVariable('uiWeightSemiBold')(props);
	const background = props.background ? getColor(props.background)(props) : getColor('grayTintLighter')(props);
	const color = props.color ? getColor(props.color)(props) : getColor('type')(props);
	const backgroundColor = props.background ? getColor(`${props.background}Dark`)(props) : getColor('grayTint')(props);
	const horizontalBase = getVariable('horizontalBase')(props);
	const verticalBase = getVariable('verticalBase')(props);

	let sizeCSS;

	if (props.size === 'small') {
		const uiRegularSize = getVariable('uiRegularSize')(props);
		const uiRegularLineHeight = getVariable('uiRegularLineHeight')(props);

		sizeCSS = css`
			font-size: ${uiRegularSize};
			line-height: ${uiRegularLineHeight};
			padding: calc(1/2 * ${horizontalBase}) 2.0rem;
			border-radius: 1.7rem;
		`;
	} else if (props.size === 'tiny') {
		const uiSize = getVariable('uiSmallSize')(props);
		const lineHeight = getVariable('uiSmallLineHeight')(props);
		sizeCSS = css`
			font-size: ${uiSize};
			line-height: ${lineHeight};
			padding: calc(1/4 * ${horizontalBase}) calc(2/3 * ${horizontalBase});
			border-radius: 1.7rem;
		`;
	} else {
		sizeCSS = css`
		font-size: inherit;
		line-height: inherit;
		padding: calc(1/3 * ${verticalBase}) calc(3/2 * ${horizontalBase});
		border-radius: ${verticalBase};
		`;
	}

	return css`
		font-family: ${mainFont};
		font-weight: ${fontWeight};
		display: inline-flex;
		align-items: center;
		border: 0 none;
		background: ${background};
		color: ${color};
		cursor: pointer;
		transition: background-color .2s ease-in-out;
		&:hover {
			background-color: ${backgroundColor};
		}
		${sizeCSS}
	`;
};

const StyledLink = styled.a`
	${styles}
`;


const DefaultButton = ({
	children,
	size,
	type,
	theme: {
		colors,
	} = {},
	...props
}) => {
	return (
		<StyledLink
			{...props}
			type={type}
			size={size}
		>
			{children}
		</StyledLink>
	);
};

DefaultButton.propTypes = {
	children: propTypes.node.isRequired,
	PrefixIcon: propTypes.func,
	prefixIconColor: propTypes.string,
	SuffixIcon: propTypes.oneOfType([
		propTypes.func,
		propTypes.object,
		propTypes.node,
	]),
	suffixIconColor: propTypes.string,
	type: propTypes.string,
	size: propTypes.string,
	theme: propTypes.shape({
		colors: propTypes.shape({
			skinColors: propTypes.shape({
				nativeAd: propTypes.string.isRequired,
			}).isRequired,
		}).isRequired,
	}).isRequired,
};

DefaultButton.defaultProps = {
	PrefixIcon: null,
	prefixIconColor: 'white',
	SuffixIcon: null,
	suffixIconColor: 'white',
	type: '',
	size: '',
};

const ThemedButton = withTheme(DefaultButton);

export const RoundedButton = props => <ThemedButton {...props} />;
export const SmallRoundedButton = props => <ThemedButton size="small" {...props} />;
export const TinyRoundedButton = props => <ThemedButton size="tiny" {...props} />;
