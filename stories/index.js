import React from 'react';
import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import Welcome from './Welcome';

import Headlines from './ArticlePreview/Headlines';
import Standfirst from './ArticlePreview/Standfirst';

import loaders from './Loaders';
import typography from './Typography';
import horizontalLinkBar from './HorizontalLinkBar';

import TopNav from './Navigation/TopNav';

storiesOf('Welcome', module).add('Site selection', () => (
	<Welcome />
));

storiesOf('11 - Navigation', module).add('11.1 - Top nav', () => (
	<TopNav />
));
horizontalLinkBar();

storiesOf('20 - Article Preview', module)
	.add('20.1 - Headlines', () => <Headlines />)
	.add('20.2 - Standfirst', () => <Standfirst />);

typography();
loaders();
