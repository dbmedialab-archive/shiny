import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import heading from './heading';
import multilineEllipsisHeading from './multilineEllipsisHeading';
import cite from './cite';
import bodyText from './bodyText';
import lunchButton from './lunch-button';
import dice from './dice';
import icon from './icon';
import underlinedHeading from './underlined-heading';
import dymoHeading from './dymo-heading';
import svgIcon from './svgIcon';
import svgIconDorris from './svgIconDorris';
import iconWithText from './iconWithText';
import plugHeading from './plug-heading';
import frontHeading from './front-heading';
import numberedList from './numberedList';
import buttons from './buttons';
import blocklink from './blocklink';
import arrowBullet from './arrowBulletStory';
import moreComponent from './mat-more-component';
import truncate from './truncate';
import dot from './dot';
import pureIcons from './pureIcons';

// @TODO: Create story for LargeScreenText;
// import LargeScreenText from '../shared-components/Typography/LargeScreenText';

export default () => {
	storiesOf('Typography|Headings', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Heading', heading)
		.add('PlugHeading', plugHeading)
		.add('Underlined Heading', underlinedHeading)
		.add('DymoHeading', dymoHeading)
		.add('Front Heading', frontHeading)
		.add('Multiline ellipsis Heading', multilineEllipsisHeading);

	storiesOf('Typography|Body text', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Body text', bodyText)
		.add('Cite', cite)
		.add('Truncate', truncate);

	storiesOf('Typography|Links', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Block Link', blocklink);

	storiesOf('Typography|Buttons', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Buttons', buttons)
		.add('LunchButton', lunchButton)
		.add('MoreComponent', moreComponent);

	storiesOf('Typography|Lists', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Numbered list', numberedList)
		.add('Arrow Bullet', arrowBullet);

	storiesOf('Typography|Icons', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Font Icon', icon)
		.add('Svg Icon', svgIcon)
		.add('Svg Icon - Dorris', svgIconDorris)
		.add('Icon with text', iconWithText)
		.add('Dice', dice)
		.add('Dot', dot)
		.add('Pure Icons', pureIcons);
};
