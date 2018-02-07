import { storiesOf, action, linkTo } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars

import label from './typography/label';
import heading from './typography/heading';
import cite from './typography/cite';
import publishedDate from './typography/publishedDate';
import bodyText from './typography/bodyText';
import lunchButton from './typography/lunch-button';
import dice from './typography/dice';
import icon from './typography/icon';
import underlinedHeading from './typography/underlined-heading';
import svgIcon from './typography/svgIcon';
import iconWithText from './typography/iconWithText';

// @TODO: Create stories for BlockLink and LargeScreenText;
// import BlockLink from '../shared-components/Typography/BlockLink';
// import LargeScreenText from '../shared-components/Typography/LargeScreenText';

export default () => {
	storiesOf('Typography', module)
		.add('Label', label)
		.add('Heading', heading)
		.add('Underlined Heading', underlinedHeading)
		.add('Cite', cite)
		.add('Published date', publishedDate)
		.add('Body text', bodyText)
		.add('LunchButton', lunchButton)
		.add('Dice', dice)
		.add('Font Icon', icon)
		.add('Svg Icon', svgIcon)
		.add('Icon with text', iconWithText);
};
