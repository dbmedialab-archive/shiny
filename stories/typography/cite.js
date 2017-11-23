import React from 'react';

import LeetTextarea from '../../src/atoms/LeetTextarea';

import Heading, { SmallHeading } from '../../src/atoms/Heading';
import Cite from '../../src/atoms/Cite';

export default () => (
	<section>
		<Heading>Cite</Heading>
		<SmallHeading>Preview</SmallHeading>
		<p>
			I rapporten <Cite>Trondheim kommunes tilskudd til SOS Rasisme</Cite>
			er det krystallklare opplysninger om omfattende juks og svindel av offentlige.
		</p>

		<SmallHeading>Usage</SmallHeading>
		<LeetTextarea>{`
import Cite from '/path/to/shiny/atoms/Cite';

<p>I rapporten <Cite>Trondheim kommunes tilskudd til SOS Rasisme</Cite>
er det krystallklare opplysninger om omfattende juks og svindel av offentlige.</p>
   `}
		</LeetTextarea>
	</section>
);
