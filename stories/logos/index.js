import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import { ShinyStory } from './ShinyStory';
import { SeHerStory } from './SeHerStory';
import { DagbladetStory } from './DagbladetStory';
import { KKStory } from './KKStory';
import AllerStory from './AllerStory';
import DinsideStory from './DinsideStory';
import DinsideStoryTwenty from './DinsideStoryTwenty';
import Elbil24Logo from './Elbil24LogoStory';

export default () => {
	storiesOf('Logos|Logos', module)
		.addDecorator(StorybookPaddedGrid)
		.add('AllerLogo', AllerStory)
		.add('ShinyLogo', ShinyStory)
		.add('SeHerLogo', SeHerStory)
		.add('KKLogo', KKStory)
		.add('DagbladetLogo', DagbladetStory)
		.add('DinsideLogo', DinsideStory)
		.add('... with twenty year anniversary marking', DinsideStoryTwenty)
		.add('Elbil24Logo', Elbil24Logo);
};
