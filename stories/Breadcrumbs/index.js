import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';
import generic from './generic';

export default () => {
	storiesOf('Breadcrumbs', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Default', generic);
};
