import React from 'react';

import { DemoContainer } from '../storybook-components';

import { Code } from '../../src/atoms/Code';

import {
	Heading, XSmallHeading,
	Paragraph,
} from '../../src';

export default () => (
	<section>
		<Heading>Heading</Heading>
		<Paragraph>Heading with multiline ellipsis</Paragraph>

		<Heading>Demo</Heading>
		<DemoContainer>
			<XSmallHeading maxLines={3}>
				This is huge heading in more then one line, that will be impossible to write without doing ellipsis
				This is huge heading in more then one line, that will be impossible to write without doing ellipsis
				This is huge heading in more then one line, that will be impossible to write without doing ellipsis
				This is huge heading in more then one line, that will be impossible to write without doing ellipsis
				This is huge heading in more then one line, that will be impossible to write without doing ellipsis
			</XSmallHeading>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	XSmallHeading,
} from '@aller/shiny';

<XSmallHeading maxLines={3}>
	This is huge heading in more then one line, that will be impossible to write without doing ellipsis
</XSmallHeading>
			`}
		</Code>
	</section>
);
