import React from 'react';

import { Code } from '../../src/atoms/Code';
import { MoreComponent } from '../../src/atoms/MainRecipe/MoreLine';

export default () => (
	<section>
		<MoreComponent />

		<Code language="jsx">
			{`import { MoreComponent } from '@aller/shiny';

				<MoreComponent />
					`}
		</Code>
	</section>

);
