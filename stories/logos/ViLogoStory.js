import React, { Fragment } from 'react';
import { withInfo } from '@storybook/addon-info';
import styled from '@emotion/styled';

import {
	ViLogo,
	getColor,
} from '../../src';

const Background = styled.div`
	background-color: ${props => (getColor(props.color))};
`;

const ViLogoStory = () => (
	<Fragment>
		<Background color="primary">
			<ViLogo />
		</Background>
	</Fragment>
);

export default withInfo('Vi logo.')(ViLogoStory);
