import styled from 'styled-components';

import {
	getColor,
	getVariable,
} from '../utils';

const BodyText = styled.p`
	font-weight: 300;
	font-size: ${getVariable('uiRegularSize')};
	line-height: ${getVariable('uiRegularLineHeight')};
	margin-bottom: ${getVariable('verticalBase')};
	color: ${getColor('type')};
	text-rendering: optimizeLegibility;
`;

export { BodyText };
