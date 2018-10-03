import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';
import Basic from './Basic';

export default () => {
	storiesOf('Articles', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Basic', Basic);
};
