import { storiesOf } from '@storybook/react';

import MainRecipe from './MainRecipe';
import { Footer } from '../../src/organisms/Footer';
import { AdTags } from '../../src/organisms/adTags';
import { Steps } from '../../src/organisms/Steps';

export default () => {
	storiesOf('Mat Components', module)
		.add('Main Recipe', MainRecipe)
		.add('Footer', Footer)
		.add('Ad and Tags', AdTags)
		.add('Steps Recipe', Steps);
};
