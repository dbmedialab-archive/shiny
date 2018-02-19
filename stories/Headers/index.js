import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import MatHeader from './MatHeader';

export default () => {
	storiesOf('Headers', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Mat Header', MatHeader);
};
