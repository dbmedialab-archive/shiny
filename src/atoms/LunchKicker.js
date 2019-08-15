import styled from 'styled-components';
import { css } from 'styled-components';

import { getColor, getVariable } from '../utils';

const styles = props => css`
color: ${getColor((props.textColor || props.color), props.kickerShade)(props)};
	font-size:   ${getVariable('uiRegularSize')(props)};
	line-height: ${getVariable('verticalBase')(props)};
	font-family: ${getVariable('mainFont')(props)};
	`;

const LunchKicker = styled.span`
	${styles}
`;

export { LunchKicker };
