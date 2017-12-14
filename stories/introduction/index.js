import React from 'react';
import { storiesOf } from '@storybook/react';

import { Grid } from '../../src/atoms/Grid';
import { SiteSelection } from '../storybook-components';
import Palette from './Palette';

export default () => {
	storiesOf('Welcome', module)
		.addDecorator(stories => <SiteSelection><Grid>{stories()}</Grid></SiteSelection>)
		.add('Palette', () => <Palette />);
};
