import React from 'react';
import styled from '@emotion/styled';
import { getVariable } from '../utils';
import { SvgIcon } from './SvgIcon';

const StyledCog = styled.div`
	position: absolute;
	left: 0;
	top: ${getVariable('verticalBase')};
	padding: calc(1/2 * ${getVariable('horizontalBase')});
	background-color: rgba(255,255,255,0.5);
	line-height: 0;
	border-bottom-right-radius: 50%;
	cursor: pointer;
`;

const AdSettingsCog = props => (
	<StyledCog {...props}>
		<SvgIcon name="settings" set="dorris" color="type" size={1.6} />
	</StyledCog>
);

export { AdSettingsCog };
