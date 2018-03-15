import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import { ShinyStory } from './ShinyStory';
import { SeHerStory } from './SeHerStory';
import { DagbladetStory } from './DagbladetStory';

export default () => {
	storiesOf('Logos', module)
		.addDecorator(StorybookPaddedGrid)
		.add('ShinyLogo', ShinyStory)
		.add('SeHerLogo', SeHerStory)
		.add('DagbladetLogo', DagbladetStory);
};
