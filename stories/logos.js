import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars

import { DemoContainer } from './storybook-components';

import {
	Heading,
	HugeHeading,
	DagbladetLogo,
} from '../src';

const DagbladetStory = () => (
	<section>
		<HugeHeading>DagbladetLogo</HugeHeading>
		<p>This svg beauty grabs all the space it can get, before displaying the Dagladet logo in all its red glory.</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<DagbladetLogo />
		</DemoContainer>
	</section>
);

export default () => {
	storiesOf('Logos', module)
		.add('DagbladetLogo', DagbladetStory);
};
