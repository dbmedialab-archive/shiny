import React from 'react';
import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import Rate from './Rate';

export default () => {
	storiesOf('Interactive|Interactive', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Rate', () => <Rate />);
};
