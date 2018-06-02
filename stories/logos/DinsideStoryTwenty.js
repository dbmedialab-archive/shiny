import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { DinsideLogo } from '../../src';

const DinsideStoryTwenty = () => (
	<DinsideLogo twentyYearAnniversary />
);

export default withInfo('The twenty year anniversary Dinside logo.')(DinsideStoryTwenty);
