import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import { ShinyStory } from './ShinyStory';
import { SeHerStory } from './SeHerStory';
import { DagbladetStory } from './DagbladetStory';
import { KKStory } from './KKStory';
import DinsideStory from './DinsideStory';

export default () => {
	storiesOf('Logos', module)
		.addDecorator(StorybookPaddedGrid)
		.add('ShinyLogo', ShinyStory)
		.add('SeHerLogo', SeHerStory)
		.add('KKLogo', KKStory)
		.add('DagbladetLogo', DagbladetStory)
		.add('DinsideLogo', DinsideStory);
};
