import styled from '@emotion/styled';
import { getVariable } from '../utils/get-variable';

const Paragraph = styled.p`
	font-size: ${getVariable('uiRegularSize')};
	font-weight: ${getVariable('uiWeight')};
	margin-bottom: ${getVariable('verticalBase')};
	text-rendering: optimizeLegibility;
	width: 100%;

	strong {
		font-weight: ${getVariable('uiWeightBold')};
	}
`;

export { Paragraph };
