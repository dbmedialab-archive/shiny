import React from 'react';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';

import {
	Elbil24ProLogo,
	getColor,
} from '../../src';

const Background = styled.div`
	background-color: ${props => (getColor(props.color))};
`;

const Elbil24LogoStory = () => (
	<Background color="primary">
		<Elbil24ProLogo />
	</Background>
);

export default withInfo('Elbil24 logo.')(Elbil24LogoStory);
