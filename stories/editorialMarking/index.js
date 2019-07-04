import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import kicker from './kicker';
import bylineImage from './bylineImage';
import bylineName from './bylineName';
import bylineWithTwoLines from './bylineWithTwoLines';
import label from './label';
import publishedDate from './publishedDate';
import tag from './tag';
import colorTextBox from './colorTextBox';
import colorTextBoxAsCol from './colorTextBoxAsCol';
import colorTextBoxSmall from './colorTextBoxSmall';

export default () => {
	storiesOf('Editorial Marking|Kicker', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Kicker', kicker);

	storiesOf('Editorial Marking|Label', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Label', label);

	storiesOf('Editorial Marking|Tag', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Tag', tag);

	storiesOf('Editorial Marking|Published Date', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Published Date', publishedDate);

	storiesOf('Editorial Marking|Bylines', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Byline image', bylineImage)
		.add('Byline name', bylineName)
		.add('Byline with two lines', bylineWithTwoLines);

	storiesOf('Editorial Marking|ColorTextBox', module)
		.addDecorator(StorybookPaddedGrid)
		.add('ColorTextBox', colorTextBox)
		.add('... as Col', colorTextBoxAsCol)
		.add('... with small Size', colorTextBoxSmall);
};
