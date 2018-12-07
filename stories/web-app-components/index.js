import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import LogiclessModalStory from './LogiclessModalStory';
import LogiclessModalOpenStory from './LogiclessModalOpenStory';

import {
	DefaultError,
	AdditionalInfoError,
	AdditionalInfoAndCallbackError,
	SvgAndInfoError,
} from './error';

import loaders from './Loaders';
import carousels from './Carousels';

export default () => {
	loaders();

	storiesOf('Web App Components|Modals', module)
		.addDecorator(StorybookPaddedGrid)
		.add('LogiclessModal', LogiclessModalStory)
		.add('... modal open', LogiclessModalOpenStory);

	storiesOf('Web App Components|Error', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Error', DefaultError)
		.add('AdditionalInfoError', AdditionalInfoError)
		.add('AdditionalInfoAndCallbackError', AdditionalInfoAndCallbackError)
		.add('SvgAndInfoError', SvgAndInfoError);

	carousels();
};
