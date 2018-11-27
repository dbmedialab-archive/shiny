import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';
import Basic from './Basic';

export default () => {
	storiesOf('Articles|Single Article', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Basic', Basic);
};
