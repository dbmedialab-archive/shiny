import React from 'react';
import styled from 'styled-components';
import { getVariable } from '../utils';
import { FontIcon } from './FontIcon';

const StyledCog = styled.div`
	position: absolute;
	left: 0;
	top: ${getVariable('verticalBase')};
	height: 3rem !important;
	width: 3rem !important;
	background-color: white;
	opacity: 0.5;
	filter: alpha(opacity=50);
	border-bottom-right-radius: 1.5rem;
	cursor: pointer;

	& span {
		opacity: 0.5;
		filter: alpha(opacity=50);
	}
`;

const AdSettingsCog = props => (
	<StyledCog {...props}>
		<FontIcon name="settings-alt-2" size={2.4} />
	</StyledCog>
);

export { AdSettingsCog };
