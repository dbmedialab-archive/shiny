import { storiesOf } from '@storybook/react';

import SearchField from './search-field';

export default () => {
	storiesOf('Forms', module)
		.add('SearchField', SearchField);
};
