// Dependencies
import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

// Stories
import { LinkStory } from './LinkStory';
import { SkinnedBorderStory } from './SkinnedBorderStory';
import { StateIndicationStory } from './StateIndicationStory';
import { ButtonStory } from './ButtonStory';
import { DropdownStory } from './DropdownStory';
import { HideStory } from './HideStory';

export default () => {
	storiesOf('Link Bar Elements', module)
		.addDecorator(StorybookPaddedGrid)
		.add('LinkBarLink', LinkStory)
		.add('... with skinned bottom border', SkinnedBorderStory)
		.add('... with alt. state indication', StateIndicationStory)
		.add('LinkBarButton', ButtonStory)
		.add('LinkBarDropdown', DropdownStory)
		.add('Hidden LinkBar elements', HideStory);
};
