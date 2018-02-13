import { storiesOf } from '@storybook/react';

import starsRating from './stars-rating';

export default () => {
	storiesOf('Raiting', module)
		.add('Stars Raiting', starsRating);
};
