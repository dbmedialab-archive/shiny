import styled from 'styled-components';

import { unshadeColorString } from '../utils/unshade-color-string';

const LunchKicker = styled.span`
	color: ${props => props.theme.colors[
		unshadeColorString(props.color) + props.kickerShade
	]};
	font-size: ${props => props.theme.variables.uiRegularSize};
	line-height: ${props => props.theme.variables.verticalBase};
	font-family: ${props => props.theme.variables.mainFont};
`;

export default LunchKicker;
export { LunchKicker };
