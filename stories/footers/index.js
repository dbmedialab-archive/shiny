import { storiesOf } from '@storybook/react';
import dinsideFooter from './dinside';
import oppskriftFooter from './oppskrift';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

export default () => {
	storiesOf('Site Footers|Dinside', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Dinside', dinsideFooter);

	storiesOf('Site Footers|Oppskrift', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Oppskrift', oppskriftFooter);
};
