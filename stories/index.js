import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Welcome from './Welcome';

import Headlines from './ArticlePreview/Headlines';
import Standfirst from './ArticlePreview/Standfirst';

import loaders from './Loaders';
import typography from './Typography';
import horizontalLinkBar from './HorizontalLinkBar';

import TopNav from './Navigation/TopNav';

storiesOf('Welcome', module).add('Site selection', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('11 - Navigation', module).add('11.1 - Top nav', () => (
  <TopNav showApp={linkTo('Button')} />
));
horizontalLinkBar();

storiesOf('20 - Article Preview', module)
  .add('20.1 - Headlines', () => <Headlines showApp={linkTo('Button')} />)
  .add('20.2 - Standfirst', () => <Standfirst showApp={linkTo('Button')} />);

typography();
loaders();
