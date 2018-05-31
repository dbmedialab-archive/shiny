import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import label from './label';
import heading from './heading';
import cite from './cite';
import tag from './tag';
import publishedDate from './publishedDate';
import bodyText from './bodyText';
import lunchButton from './lunch-button';
import dice from './dice';
// import icon from './icon';
import underlinedHeading from './underlined-heading';
import dymoHeading from './dymo-heading';
import svgIcon from './svgIcon';
import iconWithText from './iconWithText';
import plugHeading from './plug-heading';
import frontHeading from './front-heading';
import error from './error';
import numberedList from './numberedList';
import buttons from './buttons';
import blocklink from './blocklink';
import arrowBullet from './arrowBulletStory';

// @TODO: Create story for LargeScreenText;
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
		// .add('Font Icon', icon)
		.add('Svg Icon', svgIcon)
		.add('Icon with text', iconWithText)
		.add('Numbered list', numberedList)
		.add('Error', error)
		.add('Buttons', buttons)
		.add('Block Link', blocklink)
		.add('Arrow Bullet', arrowBullet);
};
