import React from 'react';
import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import Voter from './Voter';

export default () => {
	storiesOf('Interactive|Interactive', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Voter', () => <Voter />);
};
