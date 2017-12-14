import React from 'react';

import { LeetTextarea } from '../../src/atoms/LeetTextarea';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { PublishedDate } from '../../src/atoms/PublishedDate';

export default () => (
	<section>
		<HugeHeading>PublishedDate</HugeHeading>
		<Heading>Preview</Heading>
		<PublishedDate>Publisert 21. november 2017</PublishedDate>
		<PublishedDate hide>Publisert 21. november 2017</PublishedDate>
		<PublishedDate color="primary">Publisert 21. november 2017</PublishedDate>

		<Heading>Usage</Heading>
		<LeetTextarea>{`
import { PublishedDate } from '@aller/shiny';

<PublishedDate>Publisert 21. november 2017</PublishedDate>
<PublishedDate hide>Publisert 21. november 2017</PublishedDate>
<PublishedDate color="primary">Publisert 21. november 2017</PublishedDate>
   `}
		</LeetTextarea>
		<p>
			The <code>hide</code> prop hides the date.
			The <code>color</code> prop can be any of the color names in the palette. Defaults to <code>typeLight</code>
		</p>
	</section>
);
