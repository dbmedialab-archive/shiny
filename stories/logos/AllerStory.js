import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { AllerLogo } from '../../src/atoms/AllerLogo';

const AllerStory = () => (
	<AllerLogo />
);

export default withInfo()(AllerStory);
