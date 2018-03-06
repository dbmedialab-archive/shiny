import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../src/storybook-decorators/PaddedGrid';

import label from './typography/label';
import heading from './typography/heading';
import cite from './typography/cite';
import tag from './typography/tag';
import publishedDate from './typography/publishedDate';
import bodyText from './typography/bodyText';
import lunchButton from './typography/lunch-button';
import dice from './typography/dice';
import icon from './typography/icon';
import underlinedHeading from './typography/underlined-heading';
import dymoHeading from './typography/dymo-heading';
import svgIcon from './typography/svgIcon';
import iconWithText from './typography/iconWithText';
import plugHeading from './typography/plug-heading';
import frontHeading from './typography/front-heading';

// @TODO: Create stories for BlockLink and LargeScreenText;
// import BlockLink from '../shared-components/Typography/BlockLink';
// import LargeScreenText from '../shared-components/Typography/LargeScreenText';

export default () => {
	storiesOf('Typography', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Label', label)
		.add('Heading', heading)
		.add('PlugHeading', plugHeading)
		.add('Underlined Heading', underlinedHeading)
		.add('DymoHeading', dymoHeading)
		.add('Front Heading', frontHeading)
		.add('Cite', cite)
		.add('Tag', tag)
		.add('Published date', publishedDate)
		.add('Body text', bodyText)
		.add('LunchButton', lunchButton)
		.add('Dice', dice)
		.add('Font Icon', icon)
		.add('Svg Icon', svgIcon)
		.add('Icon with text', iconWithText);
};
