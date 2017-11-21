import React from 'react';

import LeetTextarea from '../../src/atoms/LeetTextarea';

import Heading, { SmallHeading } from '../../src/atoms/Heading';
import PublishedDate from '../../src/atoms/PublishedDate';

export default () => (
	<section>
		<Heading>PublishedDate</Heading>
		<SmallHeading>Preview</SmallHeading>
		<PublishedDate>Publisert 21. november 2017</PublishedDate>
		<PublishedDate hide>Publisert 21. november 2017</PublishedDate>
		<PublishedDate color="primary">Publisert 21. november 2017</PublishedDate>

		<SmallHeading>Usage</SmallHeading>
		<LeetTextarea>{`
import PublishedDate from '/path/to/shiny/atoms/PublishedDate';

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
