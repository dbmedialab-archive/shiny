import styled from '@emotion/styled';

import { getColor, getVariable } from '../../src/utils';

const BlueBox = styled.div`
	position: relative;
	box-sizing: border-box;
	background: ${getColor('calmBackground')};
	border: .1rem solid ${getColor('calmBorder')};
	color: ${getColor('calmText')};
	border-radius: .3rem;
	overflow: hidden;
	text-align: center;
	margin-bottom: ${getVariable('verticalBase')};
	font-size: ${getVariable('uiRegularSize')};
	line-height: ${getVariable('uiRegularLineHeight')};
	padding:
		calc(1/2 * ${getVariable('verticalBase')})
		calc(1/2 * ${getVariable('horizontalBase')})
	;
`;

const BluerBox = styled(BlueBox)`
	background: ${getColor('nativeAd')};
`;

export default BlueBox;
export { BluerBox };
