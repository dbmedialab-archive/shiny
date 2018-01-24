import { storiesOf } from '@storybook/react';

import steps from './steps';

export default () => {
	storiesOf('steps', module)
		.add('Mat Steps', steps);
};
