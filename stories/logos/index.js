import { storiesOf, action, linkTo } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars

import { DagbladetStory } from './DagbladetStory';
import { ShinyStory } from './ShinyStory';
import { MatStory } from './MatStory';

export default () => {
	storiesOf('Logos', module)
		.add('ShinyLogo', ShinyStory)
		.add('DagbladetLogo', DagbladetStory)
		.add('MatLogo', MatStory);
};
