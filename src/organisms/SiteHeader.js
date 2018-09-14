import React from 'react';
import styled from 'react-emotion';

import { getColor, getVariable } from '../utils';
import { Header } from '../atoms/Header';

const Primary = styled.div`
	height: calc(2 * ${getVariable('verticalBase')});
	line-height: ${getVariable('verticalBase')};
	background-color: ${getColor('secondary')};
	color: ${getColor('white')};
`;
// const Secondary = styled.section``;

const SiteHeader = () => (
	<Header>
		<Primary>
			<h1>Dagbladet</h1>
		</Primary>
	</Header>
);

export { SiteHeader };
