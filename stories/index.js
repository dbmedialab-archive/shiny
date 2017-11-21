import React from 'react';
import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';

import Headlines from './TrysilPlug/Headlines';
import Standfirst from './TrysilPlug/Standfirst';

import introduction from './Introduction';
import loaders from './Loaders';
import typography from './Typography';
import editorialMarking from './EditorialMarking';
import horizontalLinkBar from './HorizontalLinkBar';


introduction();

// Atoms
typography();
editorialMarking();
loaders();

// Molecules
horizontalLinkBar();
storiesOf('Trysil Plug', module)
	.add('20.1 - Headlines', () => <Headlines />)
	.add('20.2 - Standfirst', () => <Standfirst />);
