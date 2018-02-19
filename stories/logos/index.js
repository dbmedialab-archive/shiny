import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import { DagbladetStory } from './DagbladetStory';
import { ShinyStory } from './ShinyStory';
import { MatStory } from './MatStory';

export default () => {
	storiesOf('Logos', module)
		.addDecorator(StorybookPaddedGrid)
		.add('ShinyLogo', ShinyStory)
		.add('DagbladetLogo', DagbladetStory)
		.add('MatLogo', MatStory);
};
