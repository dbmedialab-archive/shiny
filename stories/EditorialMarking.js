import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars

import { SiteSelection } from './storybook-components';
import Grid from '../src/atoms/Grid';

import kicker from './editorialMarking/kicker';
import bylineImage from './editorialMarking/bylineImage';
import bylineName from './editorialMarking/bylineName';

// import BlockLink from '../shared-components/Typography/BlockLink';
// import LargeScreenText from '../shared-components/Typography/LargeScreenText';

export default () => {
	storiesOf('Editorial marking', module)
		.addDecorator(stories => <SiteSelection><Grid>{stories()}</Grid></SiteSelection>)
		.add('Kicker', kicker)
		.add('Byline image', bylineImage)
		.add('Byline name', bylineName);
};
