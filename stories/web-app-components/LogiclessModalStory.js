import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { LogiclessModal } from '../../src';

const LogiclessModalStory = () => (
	<LogiclessModal title="This is a title" closeModal={() => null} appElement="#root">
			This is the children.
	</LogiclessModal>
);

export default withInfo('Modal without logic, which means it needs isOpen state from somewhere.')(LogiclessModalStory);
