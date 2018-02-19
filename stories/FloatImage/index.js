import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';

import basic from './basic';
import floatLeft from './floatLeft';
import floatRight from './floatRight';

export default () => {
	storiesOf('Float image', module)
		.addDecorator(StorybookPaddedGrid)
		.add('Basic', basic)
		.add('Float left', floatLeft)
		.add('Float right', floatRight);
};
