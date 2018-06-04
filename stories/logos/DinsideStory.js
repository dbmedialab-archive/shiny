import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { DinsideLogo } from '../../src';

const DinsideStory = () => (
	<DinsideLogo />
);

export default withInfo('The main Dinside logo.')(DinsideStory);
