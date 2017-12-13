import React from 'react';
import { styled } from 'styled-components';

import { Header } from '../atoms/Header';

const Primary = styled.div`
	height: calc(2 * ${props => props.theme.variables.verticalBase});
	line-height: ${props => props.theme.variables.verticalBase};
	background-color: ${props => props.theme.colors.secondary};
	color: ${props => props.theme.colors.white};
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
