import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { Elbil24Logo } from '../../src';

const Elbil24Story = () => (
	<Elbil24Logo />
);

export default withInfo('Elbil24 logo.')(Elbil24Story);
