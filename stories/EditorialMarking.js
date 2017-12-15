import { storiesOf, action, linkTo } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars

import kicker from './editorialMarking/kicker';
import bylineImage from './editorialMarking/bylineImage';
import bylineName from './editorialMarking/bylineName';

export default () => {
	storiesOf('Editorial marking', module)
		.add('Kicker', kicker)
		.add('Byline image', bylineImage)
		.add('Byline name', bylineName);
};
