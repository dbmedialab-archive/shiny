import React from 'react';

import { Code } from '../../src/atoms/Code';

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
		<Code language="jsx">
			{`
import { Label } from '@aller/shiny';

<Label color="primary">Primary</Label>
<Label color="teal">Teal</Label>
<Label>Default</Label>
			`}
		</Code>
		<p>The <var>color</var> prop can be any of the color names in the palette. Defaults to &quot;splashBackground&quot;.</p>
		<p>The <var>textColor</var> prop can be any of the color names in the palette. Defaults to &quot;splashText&quot;.</p>
	</section>
);
