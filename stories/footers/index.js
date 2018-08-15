import { storiesOf } from '@storybook/react';
import dinsideFooter from './dinside';
import oppskriftFooter from './oppskrift';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

export default () => {
	storiesOf('Footers', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Dinside', dinsideFooter)
		.add('Oppskrift', oppskriftFooter);
};
