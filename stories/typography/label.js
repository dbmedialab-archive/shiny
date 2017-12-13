import React from 'react';

import { LeetTextarea } from '../../src/atoms/LeetTextarea';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { Label } from '../../src/atoms/Label';

export default () => (
	<section>
		<HugeHeading>Label</HugeHeading>
		<Heading>Preview</Heading>
		<Label color="primary">Primary</Label>
		<Label color="teal">Teal</Label>
		<Label>Default</Label>

		<Heading>Usage</Heading>
		<LeetTextarea>
			{`
import { Label } from '/path/to/src/atoms/Label';

<Label color="primary">Primary</Label>
<Label color="teal">Teal</Label>
<Label>Default</Label>
			`}
		</LeetTextarea>
		<p>The «color» prop can be any of the colors names in the palette. Defaults to «primary».</p>
	</section>
);
