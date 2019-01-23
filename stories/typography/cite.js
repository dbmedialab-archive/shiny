import React from 'react';

import { Code } from '../../src/atoms/Code';

import {
	Heading, HugeHeading,
	Paragraph,
	Cite,
} from '../../src';

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

<p>I rapporten <Cite>Trondheim kommunes tilskudd til SOS Rasisme</Cite>
er det krystallklare opplysninger om omfattende juks og svindel av offentlige.</p>
   `}
		</Code>
	</section>
);
