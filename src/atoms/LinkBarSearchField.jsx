/* eslint-disable jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { getColor, getVariable, linkBarElementSizes } from '../utils';
import { LinkBarElementBase } from './LinkBarElementBase';
import { SvgIcon } from './SvgIcon';

const getIconSize = (size) => {
	const sizeMap = {
		small: getVariable('uiSmallLineHeight'),
		medium: getVariable('uiRegularLineHeight'),
		large: getVariable('uiLargeLineHeight'),
	};
	return sizeMap[size] || sizeMap.large;
}

const AbsoluteIcon = styled(SvgIcon, {
	shouldForwardProp: prop => !['sizeFactor', 'fullWidth', 'inset'].includes(prop),
})`
	${(props) => {
		const { sizeFactor } = props;
		props.size = sizeFactor;
		return linkBarElementSizes;
	}}

	${(props) => {
		const { fullWidth, sizeFactor } = props;
		const horizontalBase = getVariable('horizontalBase')(props);
		const uiSmallLineHeight = getVariable('uiSmallLineHeight')(props);
		const uiRegularLineHeight = getVariable('uiRegularLineHeight')(props);

		const smallMarginFactor = sizeFactor === 'small' ? 1/2 : 1;
		const fullWidthFactor = 3/2;
		const horizontalMargin = fullWidth
			? `calc(${fullWidthFactor} * ${horizontalBase})`
			: `calc(${smallMarginFactor} * ${horizontalBase})`;

		const width = ['xsmall', 'small'].includes(sizeFactor)
			? uiSmallLineHeight
			: uiRegularLineHeight;

		return css`
			position: absolute;
			left: ${horizontalMargin};

			svg {
				width: ${width};
			}
		`;
	}}
`;

const InputBase = LinkBarElementBase.withComponent('input');
const Input = styled(InputBase)`
	${(props) => {
		const { size, icon, fullWidth } = props;
		const horizontalBase = getVariable('horizontalBase')(props);
		const uiRegularLineHeight = getVariable('uiRegularLineHeight')(props);
		const uiSmallLineHeight = getVariable('uiSmallLineHeight')(props);
		const placeholderColor = getColor(props.placeholderColor)(props);

		const widthFactor = size === 'small' ? 11 : 15;
		const marginFactor = size === 'small' ? 1/2 : 1;

		const horizontalMargin = `calc(${marginFactor} * ${horizontalBase})`;
		const width = fullWidth ? `calc(100% - calc(2 * ${horizontalMargin}))` : `calc(${widthFactor} * ${horizontalBase})`;
		let paddingLeft = '1rem';
		if (icon) {
			paddingLeft = size === 'small'
				? `calc((1 * ${horizontalBase}) + ${uiSmallLineHeight})`
				: `calc((2 * ${horizontalBase}) + ${uiRegularLineHeight})`;
		}
		return css`
			&& {
				/* Magic number: width of the AbsoluteFontIcon */
				padding-left: ${paddingLeft};
				margin-left: ${horizontalMargin};
				margin-right: ${horizontalMargin};
				width: ${width};
			}

			appearance: none;

			::placeholder {
				color: ${placeholderColor};
			}
		`;
	}}
`;
const Form = styled.form`
	${({ fullWidth }) => fullWidth && css(`
		width: 100%;
	`)}
`;
const LinkBarSearchField = ({
	action,
	iconColor,
	inputName,
	formName,
	size,
	icon,
	iconSet,
	fullWidth,
	...rest
}) => {
	const basicInput = (
		<Input
			id={inputName}
			name={inputName}
			size={size}
			type="search"
			inset
			rounded
			required
			icon={icon}
			fullWidth={fullWidth}
			{...rest}
		/>
	);

	const maybeLabelledInput = icon
		? (
			<label>
				<AbsoluteIcon name={icon} set={iconSet} sizeFactor={size} size={getIconSize(size)} color={iconColor} inset fullWidth={fullWidth} />
				{basicInput}
			</label>
		)
		: basicInput;

	return (
		<Form id={formName} name={formName} action={action} fullWidth={fullWidth}>
			{maybeLabelledInput}
		</Form>
	);
};
LinkBarSearchField.propTypes = {
	/** Color name from theme. Will be used on hover or focus */
	activeBackgroundColor: PropTypes.string,
	/** Color name from theme */
	backgroundColor: PropTypes.string,
	/** Color name from theme */
	iconColor: PropTypes.string,
	/** Unique per document. It's an HTML id... */
	inputName: PropTypes.string,
	/** Unique per document. It's an HTML id... */
	formName: PropTypes.string,
	/** Color name from theme */
	placeholderColor: PropTypes.string,
	/** Match the size of your sibling LinkBar* elements */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	/** Color name from theme */
	textColor: PropTypes.string,
	/** Icon's name, for example "search", if empty(by default) icon will not render */
	icon: PropTypes.string,
	/** Which icon set to use. */
	iconSet: PropTypes.string,
	/** If true will change width to 100% except calculated margins, which depends on size and horizontalBase */
	fullWidth: PropTypes.bool,
};
LinkBarSearchField.defaultProps = {
	activeBackgroundColor: null,
	backgroundColor: 'grayTintLighter',
	iconColor: 'link',
	inputName: 'q',
	formName: 'search',
	placeholderColor: 'typeDisabled',
	size: 'medium',
	textColor: 'type',
	icon: '',
	iconSet: 'dorris',
	fullWidth: false,
};

export { LinkBarSearchField };
export const SmallLinkBarSearchField = props => <LinkBarSearchField size="small" {...props} />;
export const LargeLinkBarSearchField = props => <LinkBarSearchField size="large" {...props} />;

LinkBarSearchField.displayName = 'LinkBarSearchField';
SmallLinkBarSearchField.displayName = 'SmallLinkBarSearchField';
LargeLinkBarSearchField.displayName = 'LargeLinkBarSearchField';
