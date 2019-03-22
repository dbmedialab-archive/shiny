import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { getColor, getVariable } from '../utils';
import { LinkBarElementBase } from './LinkBarElementBase';
import { FontIcon } from './FontIcon';

const FontIconBase = LinkBarElementBase.withComponent(FontIcon);
const AbsoluteFontIcon = styled(FontIconBase)`
	${(props) => {
		const { size } = props;
		const horizontalBase = getVariable('horizontalBase')(props);

		const smallMarginFactor = size === 'small' ? 1/2 : 1;
		const horizontalMargin = `calc(${smallMarginFactor} * ${horizontalBase})`;

		return css`
			position: absolute;
			left: ${horizontalMargin};
			font-family: "Helveticons";
		`;
	}}
`;


const InputBase = LinkBarElementBase.withComponent('input');
const Input = styled(InputBase)`
	${(props) => {
		const { size, icon } = props;
		const horizontalBase = getVariable('horizontalBase')(props);
		const placeholderColor = getColor(props.placeholderColor)(props);

		const widthFactor = size === 'small' ? 9 : 13;
		const marginFactor = size === 'small' ? 1/2 : 1;

		const horizontalMargin = `calc(${marginFactor} * ${horizontalBase})`;
		const width = `calc(${widthFactor} * ${horizontalBase})`;
		let paddingLeft = '1rem';
		if (icon) {
			paddingLeft = size === 'small' ? '2.7rem' : '4.4rem';
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

const LinkBarSearchField = ({
	action,
	iconColor,
	inputName,
	formName,
	size,
	icon,
	...rest
}) => (
	<Fragment>
		{icon && <AbsoluteFontIcon name={icon} size={size} textColor={iconColor} inset />}
		<form id={formName} name={formName} action={action}>
			<Input id={inputName} name={inputName} size={size} type="search" inset rounded required icon={icon} {...rest} />
		</form>
	</Fragment>
);
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
};
LinkBarSearchField.defaultProps ={
	activeBackgroundColor: null,
	backgroundColor: 'grayTintLighter',
	iconColor: 'link',
	inputName: 'q',
	formName: 'search',
	placeholderColor: 'typeDisabled',
	size: 'medium',
	textColor: 'type',
	icon: "",
};

export { LinkBarSearchField };
export const SmallLinkBarSearchField = props => <LinkBarSearchField size="small" {...props} />;
export const LargeLinkBarSearchField = props => <LinkBarSearchField size="large" {...props} />;

LinkBarSearchField.displayName = 'LinkBarSearchField';
SmallLinkBarSearchField.displayName = 'SmallLinkBarSearchField';
LargeLinkBarSearchField.displayName = 'LargeLinkBarSearchField';
