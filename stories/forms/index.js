import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import SearchField from './search-field';

export default () => {
	storiesOf('Forms', module)
		.addDecorator(StorybookPaddedGrid)
		.add('SearchField', SearchField);
};
