import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import { ShinyStory } from './ShinyStory';
<<<<<<< HEAD
import { SeHerStory } from './SeHerStory';
import { DagbladetStory } from './DagbladetStory';
=======
import { KKStory } from './KKStory';
>>>>>>> More fixes for KKLogo

export default () => {
	storiesOf('Logos', module)
		.addDecorator(StorybookPaddedGrid)
		.add('ShinyLogo', ShinyStory)
<<<<<<< HEAD
		.add('SeHerLogo', SeHerStory)
=======
		.add('KKLogo', KKStory)
>>>>>>> More fixes for KKLogo
		.add('DagbladetLogo', DagbladetStory);
};
