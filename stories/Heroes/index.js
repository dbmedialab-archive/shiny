import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import HorizontalHeroUnit from './horizontal-hero-unit';
import HorizontalHeroUnitWithLinkBar from './horizontal-hero-unit-with-link-bar';

export default () => {
	storiesOf('Heroes', module)
		.add('Horizontal Hero Unit', HorizontalHeroUnit)
		.add('... with LinkBar', HorizontalHeroUnitWithLinkBar);
};
