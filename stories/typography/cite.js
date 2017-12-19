import React from 'react';

import { Code } from '../../src/atoms/Code';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { Cite } from '../../src/atoms/Cite';

export default () => (
	<section>
		<HugeHeading>Cite</HugeHeading>
		<Heading>Preview</Heading>
		<p>
			I rapporten <Cite>Trondheim kommunes tilskudd til SOS Rasisme</Cite>
			er det krystallklare opplysninger om omfattende juks og svindel av offentlige.
		</p>

		<Heading>Usage</Heading>
		<Code language="jsx">{`
import { Cite } from '@aller/shiny';

<p>I rapporten <Cite>Trondheim kommunes tilskudd til SOS Rasisme</Cite>
er det krystallklare opplysninger om omfattende juks og svindel av offentlige.</p>
   `}
		</Code>
	</section>
);
