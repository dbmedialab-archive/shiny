// Dependencies
import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

// Stories
import { SeHerStory } from './SeHerStory';
import { SeHerMenuRemake } from './SeHerMenuRemake';
import { MatStory } from './MatStory';
import { KKStory } from './KKStory';
import { DagbladetStory } from './DagbladetStory';

export default () => {
	storiesOf('Complete Link Bar Examples', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Dagbladet-like bar', DagbladetStory)
		.add('KK', KKStory)
		.add('SeHer-like bar', SeHerStory)
		.add('SeHer menu remake', SeHerMenuRemake)
		.add('MatStory link bar', MatStory);
};
