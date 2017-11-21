import React from 'react';

import { SiteSelection } from '../storybook-components';
import TrysilPlug from '../../src/molecules/TrysilPlug';

export default () => (
	<SiteSelection>
		<div style={{ margin: '0 auto', maxWidth: '900px' }}>
			<h1>20.1 - Headlines!</h1>
			<TrysilPlug
				id={1}
				link="#"
				title="Politiet vil fengsle SOS Rasisme-leder i fire uker"
			/>
			<TrysilPlug
				id={2}
				link="#"
				title="Person funnet død i vannet i Skien - 62-åring savnet i samme område"
			/>
		</div>
	</SiteSelection>
);
