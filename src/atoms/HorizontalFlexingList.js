import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { getColor } from '../utils/get-color';

// Originally written for the HorizontalLinkBar molecule
const HorizontalFlexingList = styled.ul`
	box-sizing: border-box;
	${props => (props.shouldFlexChildren
		? `
			display: flex;
			align-items: center;
			justify-content: ${props.justifyContent};
		` : `
			display: block;
		`
	)}
	width: ${props => (props.shouldAdjustForNestedPadding
		? `calc(100% + 2*${props.theme.variables.horizontalBase})`
		: '100%'
	)};
	margin: ${props => (props.shouldAdjustForNestedPadding ? `0 -${props.theme.variables.horizontalBase}` : '0')};
	padding: ${props => (props.shouldHavePadding ? `0 calc(1/2 * ${props.theme.variables.horizontalBase})` : '0')};
	font-family: ${props => props.theme.variables.mainFont};

	background: ${props => (props.backgroundColor ? getColor(props.backgroundColor) : props.background)};

	white-space: nowrap;
	overflow: -moz-scrollbars-none;
	overflow: ${props => props.overflow};

	-webkit-overflow-scrolling: touch!important;
	-ms-overflow-style: -ms-autohiding-scrollbar!important;
	-ms-overflow-style: none;
	position: relative;
	flex-wrap: ${props => (props.shouldWrap ? 'wrap' : 'nowrap')};

	::-webkit-scrollbar {
		display: none;
	}
`;
HorizontalFlexingList.defaultProps = {
	background: null,
	backgroundColor: null,
	justifyContent: 'initial',
	shouldFlexChildren: false,
	shouldWrap: false,
};
HorizontalFlexingList.propTypes = {
	background: PropTypes.string, // Deprecated, actual css color string
	backgroundColor: PropTypes.string, // Color name from theme
	shouldWrap: PropTypes.bool,
	justifyContent: PropTypes.string,
	shouldFlexChildren: PropTypes.bool,
};

export { HorizontalFlexingList };
