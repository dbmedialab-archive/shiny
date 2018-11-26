// Dependencies
import { storiesOf } from '@storybook/react';

// Stories
import { SeHerStory } from './SeHerStory';
import { SeHerMenuRemake } from './SeHerMenuRemake';
import { MatStory } from './MatStory';
import { KKStory } from './KKStory';
import { DagbladetStory } from './DagbladetStory';

export default () => {
	storiesOf('Link Bars|Complete Link Bar Examples', module)
		.add('Dagbladet-like bar', DagbladetStory)
		.add('KK', KKStory)
		.add('SeHer-like bar', SeHerStory)
		.add('SeHer menu remake', SeHerMenuRemake)
		.add('MatStory link bar', MatStory);
};
