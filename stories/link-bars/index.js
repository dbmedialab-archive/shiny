// Dependencies
import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

// Stories
import HorizontalLinkBarStory from './HorizontalLinkBarStory';
import OverflowStory from './OverflowStory';
import { VerticalLinkBarStory } from './VerticalLinkBarStory';
import { NestedPaddingStory } from './NestedPaddingStory';
import { NoPaddingStory } from './NoPaddingStory';
import { GradientBackgroundStory } from './GradientBackgroundStory';
import { FullWidthStory } from './FullWidthStory';
import { ScrollArrowsStory } from './ScrollArrowsStory';
import { ScrollArrowsNestedPaddingStory } from './ScrollArrowsNestedPaddingStory';
import { ScrollArrowsSubLevelStory } from './ScrollArrowsSubLevelStory';
import { ScrollArrowsGradientBackground } from './ScrollArrowsGradientBackgroundStory';

export default () => {
	storiesOf('Link Bars', module)
		.addDecorator(StorybookPaddedGrid)
		.add('VerticalLinkBar', VerticalLinkBarStory)
		.add('HorizontalLinkBar', HorizontalLinkBarStory)
		.add('... with overflowing content', OverflowStory)
		.add('... with nested padding', NestedPaddingStory)
		.add('... with gradient background', GradientBackgroundStory)
		.add('... without padding', NoPaddingStory)
		.add('FullWidthLinkBar', FullWidthStory)
		.add('ScrollArrowsLinkBar', ScrollArrowsStory)
		.add('... which should adjust for nested padding', ScrollArrowsNestedPaddingStory)
		.add('... which is not a top level component', ScrollArrowsSubLevelStory)
		.add('... which have gradient background', ScrollArrowsGradientBackground);
};
