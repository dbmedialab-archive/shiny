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

		<Heading>With additional information</Heading>
		<DemoContainer >
			<Error additionalInfo="Vi kunne dessverre ikke laste inn relaterte oppskrifter akkurat nå" />
		</DemoContainer>

		<Code language="jsx">
			{`
import {
	Error
} from '@aller/shiny';

<Error info="Vi kunne dessverre ikke laste inn relaterte oppskrifter akkurat nå" />
			`}
		</Code>

		<Heading>With additional information and callback</Heading>
		<DemoContainer>
			<Error
				additionalInfo="Vi kunne dessverre ikke laste inn relaterte oppskrifter akkurat nå"
				onRetryButtonClick={() => {}}
			/>
		</DemoContainer>

		<Code language="jsx">
			{`
import {
	Error
} from '@aller/shiny';

<Error
	additionalInfo="Vi kunne dessverre ikke laste inn relaterte oppskrifter akkurat nå"
	onRetryButtonClick={() => {}}
/>
`}
		</Code>
		<Heading>With custom svg icon and information</Heading>
		<DemoContainer>
			<Error
				message="Fant ingen videoer"
				icon="crossed-video-camera"
				additionalInfo="Vi fant dessverre ingen videoer merket med pizza. Prøv en annen kategori.  "
				onRetryButtonClick={() => {}}
			/>
		</DemoContainer>

		<Code language="jsx">
			{`
import {
	Error
} from '@aller/shiny';

<Error
	message="Fant ingen videoer"
	icon="crossed-video-camera"
	additionalInfo="Vi fant dessverre ingen videoer merket med pizza. Prøv en annen kategori.  "
/>
`}
		</Code>

	</section>
);
