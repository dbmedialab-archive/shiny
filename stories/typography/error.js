import React from 'react';

import { DemoContainer } from '../storybook-components';

import { Code } from '../../src/atoms/Code';

import {
	Heading,
	HugeHeading,
} from '../../src/atoms/Heading';

import { Error } from '../../src/atoms/Error';

export default () => (
	<section>
		<HugeHeading>Error message</HugeHeading>
		<p>Optional attributes can be specified: detailed message and callback on Retry button click</p>

		<Heading>Default</Heading>
		<DemoContainer>
			<Error />
		</DemoContainer>

		<Code language="jsx">
			{`
import {
	Error
} from '@aller/shiny';

<Error />
			`}
		</Code>

		<Heading>With message</Heading>
		<DemoContainer >
			<Error message="Vi kunne dessverre ikke laste inn relaterte oppskrifter akkurat nå" />
		</DemoContainer>

		<Code language="jsx">
			{`
import {
	Error
} from '@aller/shiny';

<Error message="Vi kunne dessverre ikke laste inn relaterte oppskrifter akkurat nå" />
			`}
		</Code>

		<Heading>With message and callback</Heading>
		<DemoContainer>
			<Error
				message="Vi kunne dessverre ikke laste inn relaterte oppskrifter akkurat nå"
				onRetryButtonClick={() => {}}
			/>
		</DemoContainer>

		<Code language="jsx">
			{`
import {
	Error
} from '@aller/shiny';

<Error
	message="Vi kunne dessverre ikke laste inn relaterte oppskrifter akkurat nå"
	onRetryButtonClick={() => alert('Retrying!')}
/>
`}
		</Code>

	</section>
);
