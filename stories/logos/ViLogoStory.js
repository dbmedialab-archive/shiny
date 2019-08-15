import React from 'react';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';

import {
	ViLogo,
	getColor,
} from '../../src';

const Background = styled.div`
	background-color: ${props => (getColor(props.color))};
`;

const ViLogoStory = () => (
	<Background color="primary">
		<ViLogo />
	</Background>
);

export default withInfo('Vi logo.')(ViLogoStory);
