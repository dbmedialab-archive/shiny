import { css } from 'styled-components';
import { getVariable } from './get-variable';

/*
 * With the 'xsmall', 'small', 'medium' (default) and 'large' variants,
 * LinkBar items like LinkBarLinks, LinkBarButtons and LinkBarDropdowns
 * all take up the same vertical space. That way, you can stuff in
 * another item without changing the height of your LinkBar.
 */
export const linkBarElementSizes = (props) => {
	const { size, inset } = props;
	const horizontalBase = getVariable('horizontalBase')(props);
	const verticalBase = getVariable('verticalBase')(props);
	const uiSmallSize = getVariable('uiSmallSize')(props);
	const uiSmallLineHeight = getVariable('uiSmallLineHeight')(props);
	const uiRegularSize = getVariable('uiRegularSize')(props);
	const uiRegularLineHeight = getVariable('uiRegularLineHeight')(props);

	// If props.inset is true, we will remove half the vertical padding
	// We use this for elements like buttons and search forms that do not
	// cover the entire height of the link bar
	const insetFactor = inset ? 1/2 : 1;

	let verticalPadding;
	let horizontalPadding;

	if (size === 'xsmall') {
		verticalPadding = '0';
		horizontalPadding = `calc(1/2 * ${horizontalBase})`;
	} else if (size === 'small') {
		verticalPadding = `calc(${insetFactor} * 1/2 * ( 3/2*${verticalBase} - ${uiSmallLineHeight}) )`;
		horizontalPadding = `calc(1/2 * ${horizontalBase})`;
	} else if (size === 'large') {
		verticalPadding = `calc(${insetFactor} * 1/2 * ( 5/2*${verticalBase} - ${uiRegularLineHeight}) )`;
		horizontalPadding = horizontalBase;
	} else {
		// size === medium
		verticalPadding =	`calc(${insetFactor} * 1/2 * ( 2*${verticalBase} - ${uiRegularLineHeight}) )`;
		horizontalPadding = horizontalBase;
	}

	const fontSize = ['xsmall', 'small'].includes(props.size)
		? uiSmallSize
		: uiRegularSize;
	const lineHeight = ['xsmall', 'small'].includes(props.size)
		? uiSmallLineHeight
		: uiRegularLineHeight;

	return css`
		margin: ${inset ? `${verticalPadding} 0` : 0};
		padding: ${verticalPadding} ${horizontalPadding};
		font-size: ${fontSize};
		line-height: ${lineHeight};
	`;
};
