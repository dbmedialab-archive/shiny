import React from 'react';

import { Code } from '../../src/atoms/Code';
import { DemoContainer } from '../storybook-components';
import {
	HugeHeading,
	SmallPlugHeading,
	MediumPlugHeading,
	LargePlugHeading,
	XLargePlugHeading,
	HugePlugHeading,
} from '../../src';

export default () => (
	<section>
		<HugeHeading>PlugHeading</HugeHeading>
		<p>Like a regular <em>Heading</em>, but with adjusted margin to fit nicely beneath images, like in a plug.</p>

		<DemoContainer>
			<SmallPlugHeading>This is a small plug heading</SmallPlugHeading>
			<MediumPlugHeading>This is a medium plug heading</MediumPlugHeading>
			<LargePlugHeading>This is a large plug heading</LargePlugHeading>
			<XLargePlugHeading>This is an extra large plug heading</XLargePlugHeading>
			<HugePlugHeading>This is a huge plug heading</HugePlugHeading>
		</DemoContainer>

		<Code language="jsx">
			{`
import {
	SmallPlugHeading,
	MediumPlugHeading,
	LargePlugHeading,
	XLargePlugHeading,
	HugePlugHeading
} from '@aller/shiny';

<SmallPlugHeading textColor="type" lineColor="primary">This is a small front line heading</SmallPlugHeading>
<MediumPlugHeading>This is a medium front line heading</MediumPlugHeading>
<LargePlugHeading>This is a large front line heading</LargePlugHeading>
<XLargePlugHeading>This is a Xlarge front line heading</XLargePlugHeading>
<HugePlugHeading>This is a huge front line heading</HugePlugHeading>
			`}
		</Code>
	</section>
);
