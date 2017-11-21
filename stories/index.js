import React from 'react';
import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import Welcome from './Welcome';

import Headlines from './TrysilPlug/Headlines';
import Standfirst from './TrysilPlug/Standfirst';

import loaders from './Loaders';
import typography from './Typography';
import editorialMarking from './EditorialMarking';
import horizontalLinkBar from './HorizontalLinkBar';

import SiteSelection from './SiteSelection';
import Palette from '../src/Palette';

storiesOf('Welcome', module)
	.add('Site selection', () => (
		<Welcome />
	))
	// @TODO Move Palette to somewhere it belongs
	.add('Palette', () => {
		return (
			<SiteSelection>
				<Palette />
			</SiteSelection>
		);
	});

horizontalLinkBar();

typography();
editorialMarking();
loaders();

storiesOf('Trysil Plug', module)
	.add('20.1 - Headlines', () => <Headlines />)
	.add('20.2 - Standfirst', () => <Standfirst />);
