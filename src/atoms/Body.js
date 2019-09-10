import styled from 'styled-components';

import { getColor, getVariable } from '../utils';

const Body = styled.body`
	background: ${getColor('background')};
	color: ${getColor('type')};
	font-family: ${getVariable('mainFont')};
	font-size: ${getVariable('uiRegularSize')};
	line-height: ${getVariable('uiRegularLineHeight')};
	font-weight: ${getVariable('uiWeight')};
`;

export { Body };
