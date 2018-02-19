import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../src/storybook-decorators/PaddedGrid';

import kicker from './editorialMarking/kicker';
import bylineImage from './editorialMarking/bylineImage';
import bylineName from './editorialMarking/bylineName';
import bylineWithTwoLines from './editorialMarking/bylineWithTwoLines';

export default () => {
	storiesOf('Editorial marking', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Kicker', kicker)
		.add('Byline image', bylineImage)
		.add('Byline name', bylineName)
		.add('Byline with two lines', bylineWithTwoLines);
};
