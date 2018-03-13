import styled from 'styled-components';

import { getColor, getVariable } from '../utils';

const LunchKicker = styled.span`
	color: ${props => getColor((props.textColor || props.color), props.kickerShade)};
	font-size:   ${getVariable('uiRegularSize')};
	line-height: ${getVariable('verticalBase')};
	font-family: ${getVariable('mainFont')};
`;

export { LunchKicker };
