import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars

import { SiteSelection } from './storybook-components';
import Grid from '../src/atoms/Grid';

import label from './typography/label';
import heading from './typography/heading';
import cite from './typography/cite';
import publishedDate from './typography/publishedDate';

// @TODO: Create stories for BlockLink and LargeScreenText;
// import BlockLink from '../shared-components/Typography/BlockLink';
// import LargeScreenText from '../shared-components/Typography/LargeScreenText';

export default () => {
	storiesOf('Typography', module)
		.addDecorator(stories => <SiteSelection><Grid>{stories()}</Grid></SiteSelection>)
		.add('Label', label)
		.add('Heading', heading)
		.add('Cite', cite)
		.add('Published date', publishedDate);
};
