import React, { Fragment } from 'react';
import { withInfo } from '@storybook/addon-info';
import styled from '@emotion/styled';

import {
	Elbil24Logo,
	getColor,
} from '../../src';

const Background = styled.div`
	background-color: ${props => (getColor(props.color))};
`;

const Elbil24LogoStory = () => (
	<Fragment>
		<Background color="primary">
			<Elbil24Logo />
		</Background>
		<Background color="primary">
			<Elbil24Logo inverted />
		</Background>
	</Fragment>
);

export default withInfo('Elbil24 logo.')(Elbil24LogoStory);
