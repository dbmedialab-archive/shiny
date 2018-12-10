import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { Image } from '../../src';

const ImageStory = () => {
	return (
		<Image src="https://via.placeholder.com/640x480" />
	);
};

export default withInfo()(ImageStory);
