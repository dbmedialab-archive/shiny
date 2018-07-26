import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import LogiclessModalStory from './LogiclessModalStory';
import LogiclessModalOpenStory from './LogiclessModalOpenStory';


export default () => {
	storiesOf('Modals', module)
		.addDecorator(StorybookPaddedGrid)
		.add('LogiclessModal', LogiclessModalStory)
		.add('... modal open', LogiclessModalOpenStory);
};
