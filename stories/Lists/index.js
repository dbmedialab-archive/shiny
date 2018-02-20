import { storiesOf } from '@storybook/react';

import orderedList from './ordered-list';

export default () => {
	storiesOf('Lists', module)
		.add('Ordered List', orderedList);
};
