import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { Image } from '../../src';

const ImageStory = () => {
	return (
		<Image src="https://picsum.photos/640/480" />
	);
};

export default withInfo()(ImageStory);
