import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import SearchField from './search-field';
import TextInputStory from './input-text';
import PasswordInputStory from './input-password';

export default () => {
	storiesOf('Forms|Input', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Text', TextInputStory)
		.add('Password', PasswordInputStory);

	storiesOf('Forms|Managed SearchField', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Managed SearchField', SearchField);
};
