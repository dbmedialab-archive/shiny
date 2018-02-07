import React from 'react';

import { TopBar } from '../../atoms/MatHeader/TopBar';
import { TopBarSearchField } from '../../atoms/MatHeader/TopBarSearchField';

export default () => (
	<TopBar>
		<TopBarSearchField type={'search'} placeholder={'SØK I HELE OPPSKRIFT.NO'} />
	</TopBar>
);
