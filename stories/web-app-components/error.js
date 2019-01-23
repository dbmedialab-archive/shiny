import React from 'react';

import { DemoContainer } from '../storybook-components';
import { Code } from '../../src/atoms/Code';

import {
	Heading, HugeHeading,
	Paragraph,

	Error,
} from '../../src';

const DefaultError = () => (
	<section>
		<HugeHeading>Error message</HugeHeading>
		<Paragraph>Optional attributes can be specified: detailed message and callback on Retry button click</Paragraph>

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
		<Paragraph>Optional attributes can be specified: detailed message and callback on Retry button click</Paragraph>

		<Heading>With additional information</Heading>
		<DemoContainer>
			<Error AdditionalInfo={() => <Paragraph>Vi kunne dessverre ikke laste inn relaterte oppskrifter akkurat nå</Paragraph>} />
		</DemoContainer>

		<Code language="jsx">
			{`
import {
	Error
} from '@aller/shiny';

<Error AdditionalInfo={() => <Paragraph>Vi kunne dessverre ikke laste inn relaterte oppskrifter akkurat nå</Paragraph>} />
			`}
		</Code>
	</section>
);

const AdditionalInfoAndCallbackError = () => (
	<section>
		<HugeHeading>Error message</HugeHeading>
		<Paragraph>Optional attributes can be specified: detailed message and callback on Retry button click</Paragraph>

		<Heading>With additional information and callback</Heading>
		<DemoContainer>
			<Error
				AdditionalInfo={() => <Paragraph>Vi kunne dessverre ikke laste inn relaterte oppskrifter akkurat nå</Paragraph>}
				onRetryButtonClick={() => {}}
			/>
		</DemoContainer>

		<Code language="jsx">
			{`
import {
	Error
} from '@aller/shiny';

<Error
	AdditionalInfo={() => <Paragraph>Vi kunne dessverre ikke laste inn relaterte oppskrifter akkurat nå</Paragraph>
	onRetryButtonClick={() => {}}
/>
`}
		</Code>
	</section>
);

const SvgAndInfoError = () => (
	<section>
		<HugeHeading>Error message</HugeHeading>
		<Paragraph>Optional attributes can be specified: detailed message and callback on Retry button click</Paragraph>

		<Heading>With custom colored svg icon and information</Heading>
		<DemoContainer>
			<Error
				iconColor="primary"
				message="Fant ingen videoer"
				icon="crossed-video-camera"
				AdditionalInfo={() => <Paragraph>Vi fant dessverre ingen videoer merket med pizza. Prøv en annen kategori.</Paragraph>}
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
	AdditionalInfo={() => <Paragraph>Vi fant dessverre ingen videoer merket med pizza. Prøv en annen kategori.</Paragraph>}
/>
`}
		</Code>

	</section>
);

export { DefaultError };
export { AdditionalInfoError };
export { AdditionalInfoAndCallbackError };
export { SvgAndInfoError };
