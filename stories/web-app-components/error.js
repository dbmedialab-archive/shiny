import React from 'react';

import { DemoContainer } from '../storybook-components';

import { Code } from '../../src/atoms/Code';

import {
	Heading,
	HugeHeading,
} from '../../src/atoms/Heading';

import { Error } from '../../src/atoms/Error';

const DefaultError = () => (
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
	</section>
);

const AdditionalInfoError = () => (
	<section>
		<HugeHeading>Error message</HugeHeading>
		<p>Optional attributes can be specified: detailed message and callback on Retry button click</p>

		<Heading>With additional information</Heading>
		<DemoContainer>
			<Error AdditionalInfo={() => <p>Vi kunne dessverre ikke laste inn relaterte oppskrifter akkurat nå</p>} />
		</DemoContainer>

		<Code language="jsx">
			{`
import {
	Error
} from '@aller/shiny';

<Error AdditionalInfo={() => <p>Vi kunne dessverre ikke laste inn relaterte oppskrifter akkurat nå</p>} />
			`}
		</Code>
	</section>
);

const AdditionalInfoAndCallbackError = () => (
	<section>
		<HugeHeading>Error message</HugeHeading>
		<p>Optional attributes can be specified: detailed message and callback on Retry button click</p>

		<Heading>With additional information and callback</Heading>
		<DemoContainer>
			<Error
				AdditionalInfo={() => <p>Vi kunne dessverre ikke laste inn relaterte oppskrifter akkurat nå</p>}
				onRetryButtonClick={() => {}}
			/>
		</DemoContainer>

		<Code language="jsx">
			{`
import {
	Error
} from '@aller/shiny';

<Error
	AdditionalInfo={() => <p>Vi kunne dessverre ikke laste inn relaterte oppskrifter akkurat nå</p>
	onRetryButtonClick={() => {}}
/>
`}
		</Code>
	</section>
);

const SvgAndInfoError = () => (
	<section>
		<HugeHeading>Error message</HugeHeading>
		<p>Optional attributes can be specified: detailed message and callback on Retry button click</p>

		<Heading>With custom colored svg icon and information</Heading>
		<DemoContainer>
			<Error
				iconColor="primary"
				message="Fant ingen videoer"
				icon="crossed-video-camera"
				AdditionalInfo={() => <p>Vi fant dessverre ingen videoer merket med pizza. Prøv en annen kategori.</p>}
				onRetryButtonClick={() => {}}
			/>
		</DemoContainer>

		<Code language="jsx">
			{`
import {
	Error
} from '@aller/shiny';

<Error
	iconColor="primary"
	message="Fant ingen videoer"
	icon="crossed-video-camera"
	AdditionalInfo={() => <p>Vi fant dessverre ingen videoer merket med pizza. Prøv en annen kategori.</p>}
/>
`}
		</Code>

	</section>
);

export { DefaultError };
export { AdditionalInfoError };
export { AdditionalInfoAndCallbackError };
export { SvgAndInfoError };
