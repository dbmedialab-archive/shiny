import React from 'react';
import propTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';

import { getColor, getVariable } from '../utils';

const StyledLink = styled.a`
  font-family: ${getVariable('mainFont')};
  font-weight: ${getVariable('semiBoldWeight')};
  display: inline-flex;
  align-items: center;
  border: 0 none;
  background: ${props => (props.background ? getColor(props.background) : getColor('grayTintLighter'))};
  color: ${props => (props.color ? getColor(props.color) : getColor('type'))};
  cursor: pointer;
  transition: background-color .2s ease-in-out;
  &:hover {
	 background-color: ${props => (props.background ? getColor(`${props.background}Dark`) : getColor('grayTint'))};
  }

  ${(props) => {
		if (props.size === 'small') {
			return css`
				font-size: ${getVariable('uiRegularSize')};
				line-height: ${getVariable('uiRegularLineHeight')};
				padding: calc(1/2 * ${getVariable('horizontalBase')}) 2.0rem;
				border-radius: 1.7rem;
			`;
		}

		if (props.size === 'tiny') {
			return css`
				font-size: ${getVariable('uiSmallSize')};
				line-height: ${getVariable('uiSmallLineHeight')};
				padding: calc(1/4 * ${getVariable('horizontalBase')}) calc(2/3 * ${getVariable('horizontalBase')});
				border-radius: 1.7rem;
			`;
		}

		return css`
			font-size: inherit;
			line-height: inherit;
			padding: calc(1/3 * ${getVariable('verticalBase')}) calc(3/2 * ${getVariable('horizontalBase')});
			border-radius: ${getVariable('verticalBase')};
		 `;
	}}
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
