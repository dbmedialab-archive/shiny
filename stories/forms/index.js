import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import SearchField from './search-field';

export default () => {
	storiesOf('Typography|Forms', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Managed SearchField', SearchField);
};
