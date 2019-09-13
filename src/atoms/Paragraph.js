import styled from 'styled-components';
import { getColor, getVariable } from '../utils';

const Paragraph = styled.p`
	margin-bottom: ${getVariable('verticalBase')};
	font-size: ${getVariable('uiRegularSize')};
	line-height: ${getVariable('uiRegularLineHeight')};
	font-weight: ${getVariable('uiWeight')};
	color: ${getColor('type')};
	text-rendering: optimizeLegibility;

	strong {
		font-weight: ${getVariable('uiWeightBold')};
	}
`;

export { Paragraph };
