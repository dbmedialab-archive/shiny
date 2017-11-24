import React from 'react';
import { storiesOf } from '@storybook/react';
import { SiteSelection } from '../storybook-components';
import Grid from '../../src/atoms/Grid';

import basic from './basic';
import floatLeft from './floatLeft';
import floatRight from './floatRight';

export default () => {
	storiesOf('Float image', module)
		.addDecorator(stories => <SiteSelection><Grid>{stories()}</Grid></SiteSelection>)
		.add('Basic', basic)
		.add('Float left', floatLeft)
		.add('Float right', floatRight);
};
