import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../../src/storybook-decorators/PaddedGrid';
import { HorizontalCarouselStory } from './horizontal';
import { VerticalCarouselStory } from './vertical';
import { VerticalWithoutButtons } from './verticalWithoutButtons';
import { WithoutMouseEventsCarouselStory } from './withoutMouseEvents';
import { WithCustomHeaderCarouselStory } from './withCustomHeader';

export default () => {
	storiesOf('Web App Components|Carousel')
		.addDecorator(StorybookPaddedGrid)
		.add('... horizontal', HorizontalCarouselStory)
		.add('... vertical', VerticalCarouselStory)
		.add('... vertical without buttons', VerticalWithoutButtons)
		.add('... without mouse events', WithoutMouseEventsCarouselStory)
		.add('... with custom header', WithCustomHeaderCarouselStory);
};
