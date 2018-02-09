import React from 'react';

import { Code } from '../../src/atoms/Code';
import { Description } from '../../src/atoms/MainRecipe/Description';

export default () => (
	<section>
		<Description>
			<span>
				Helstekt kalkun er en selvfølge på
				middagsbordet ved Thanksgiving, jul
				og nyttår! For en smakfull og saftig
				kalkun anbefaler vi denne oppskriften.
			</span>
		</Description>
		<Code language="jsx">
			{`import { Description } from '../../src/atoms/MainRecipe/Description';

		<Description>
			<span>
				Lorem ipsum dolor sit amet,
				consectetur adipisicing elit.
				Deserunt doloribus ducimus
				illum, iusto laborum maxime
				optio placeat soluta vitae
				voluptates. Animi ea eos
				labore non officia pariatur
				quaerat similique ut.
			</span>
		</Description>
			`}
		</Code>
	</section>
);

