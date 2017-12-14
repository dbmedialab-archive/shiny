import React from 'react';

import { LeetTextarea } from '../../src/atoms/LeetTextarea';

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
		<LeetTextarea>{`
import { Cite } from '@aller/shiny';

<p>I rapporten <Cite>Trondheim kommunes tilskudd til SOS Rasisme</Cite>
er det krystallklare opplysninger om omfattende juks og svindel av offentlige.</p>
   `}
		</LeetTextarea>
	</section>
);
