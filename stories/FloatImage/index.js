import { storiesOf } from '@storybook/react';

import basic from './basic';
import floatLeft from './floatLeft';
import floatRight from './floatRight';

export default () => {
	storiesOf('Float image', module)
		.add('Basic', basic)
		.add('Float left', floatLeft)
		.add('Float right', floatRight);
};
