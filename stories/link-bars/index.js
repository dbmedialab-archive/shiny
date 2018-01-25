// Dependencies
import { storiesOf, action, linkTo } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars

// Stories
import { VerticalLinkBarStory } from './VerticalLinkBarStory';
import { HorizontalLinkBarStory } from './HorizontalLinkBarStory';
import { NestedPaddingStory } from './NestedPaddingStory';
import { NoPaddingStory } from './NoPaddingStory';
import { GradientBackgroundStory } from './GradientBackgroundStory';
import { FullWidthStory } from './FullWidthStory';
import { ScrollArrowsStory } from './ScrollArrowsStory';
import { ScrollArrowsNestedPaddingStory } from './ScrollArrowsNestedPaddingStory';
import { ScrollArrowsSubLevelStory } from './ScrollArrowsSubLevelStory';
import { SkinnedBorderStory } from './SkinnedBorderStory';
import { StateIndicationStory } from './StateIndicationStory';
import { LinkStory } from './LinkStory';
import { ButtonStory } from './ButtonStory';
import { DropdownStory } from './DropdownStory';

import { DagbladetStory } from './DagbladetStory';

export default () => {
	storiesOf('Link bars', module)
		.add('VerticalLinkBar', VerticalLinkBarStory)
		.add('HorizontalLinkBar', HorizontalLinkBarStory)
		.add('... with dropdowns', DropdownStory)
		.add('... with nested padding', NestedPaddingStory)
		.add('... with gradient background', GradientBackgroundStory)
		.add('... without padding', NoPaddingStory)
		.add('FullWidthLinkBar', FullWidthStory)
		.add('ScrollArrowsLinkBar', ScrollArrowsStory)
		.add('... which should adjust for nested padding', ScrollArrowsNestedPaddingStory)
		.add('... which is not a top level component', ScrollArrowsSubLevelStory)
		.add('LinkBarLink', LinkStory)
		.add('... with skinned bottom border', SkinnedBorderStory)
		.add('... with alt. state indication', StateIndicationStory)
		.add('LinkBarButton', ButtonStory)
		.add('Dagbladet-like bar', DagbladetStory);
};
