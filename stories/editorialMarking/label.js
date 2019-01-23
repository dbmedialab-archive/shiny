import React from 'react';

import { Code } from '../../src/atoms/Code';

import {
	Heading,
	HugeHeading,
	Label,
	Paragraph,
} from '../../src';

export default () => (
	<section>
		<HugeHeading>Label</HugeHeading>
		<Heading>Preview</Heading>
		<Label backgroundColor="primary">Primary</Label>
		<Label backgroundColor="teal">Teal</Label>
		<Label>Default</Label>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import { Label } from '@aller/shiny';

<Label backgroundColor="primary">Primary</Label>
<Label backgroundColor="teal">Teal</Label>
<Label>Default</Label>
			`}
		</Code>
		<Paragraph>The <var>backgroundColor</var> prop can be any of the color names in the palette.
			Defaults to &quot;splashBackground&quot;.
		</Paragraph>
		<Paragraph>The <var>textColor</var> prop can be any of the color names in the palette.
			Defaults to &quot;splashText&quot;.
		</Paragraph>
	</section>
);
