import styled from 'styled-components';
import { getColor, getVariable } from '../utils';

const Dropdown = styled.select`
	display: flex;
	align-items: center;
	background-color: ${getColor('grayTintLight')};
	padding: calc(${getVariable('verticalBase')}/4) ${getVariable('horizontalBase')};
	border-radius: calc(2/3*${getVariable('verticalBase')});
	border: 0;
	z-index: 1;
	cursor: pointer;
	position: relative;
	font-size: ${getVariable('uiRegularSize')};
	line-height: ${getVariable('uiRegularLineHeight')};
	font-family: inherit;
`;

export { Dropdown };
