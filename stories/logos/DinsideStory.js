import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { DinsideLogo } from '../../src';

const DinsideStory = () => (
	<div>
		<DinsideLogo />
		<DinsideLogo twentyYearAnniversary />
	</div>
);

export default withInfo('This is the different variations of the Dinside logo.')(DinsideStory);
