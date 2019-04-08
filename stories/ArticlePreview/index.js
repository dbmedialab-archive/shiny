import React from 'react';
import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';
import ArticlePreview from '../../src/molecules/ArticlePreview';

export default () => {
	storiesOf('Editorial Marking|ArticlePreview', module)
	.addDecorator(StorybookPaddedGrid)
	.add('ArticlePreview', () =>
	(
		<ArticlePreview background="notBlack"/>
	))
}
