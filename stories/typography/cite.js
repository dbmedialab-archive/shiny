import React from 'react';

import { Code } from '../../src/atoms/Code';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { Cite } from '../../src/atoms/Cite';

export default () => (
	<section>
		<HugeHeading>Cite</HugeHeading>
		<Heading>Preview</Heading>
		<Paragraph>
			I rapporten <Cite>Trondheim kommunes tilskudd til SOS Rasisme</Cite>
			er det krystallklare opplysninger om omfattende juks og svindel av offentlige.
		</Paragraph>

		<Heading>Usage</Heading>
		<Code language="jsx">{`
import { Cite } from '@aller/shiny';

<Paragraph>I rapporten <Cite>Trondheim kommunes tilskudd til SOS Rasisme</Cite>
er det krystallklare opplysninger om omfattende juks og svindel av offentlige.</Paragraph>
   `}
		</Code>
	</section>
);
