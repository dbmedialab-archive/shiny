import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import CollapsiblePanelStory from './CollapsiblePanelStory';

export default () => {
	storiesOf('General', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Collapsible Panel', CollapsiblePanelStory);
};
