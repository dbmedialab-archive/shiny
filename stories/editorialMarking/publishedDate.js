import React from 'react';

import { Code } from '../../src/atoms/Code';

import {
	Heading,
	HugeHeading,
	PublishedDate,
	Paragraph,
} from '../../src';

export default () => (
	<section>
		<HugeHeading>PublishedDate</HugeHeading>
		<Heading>Preview</Heading>
		<PublishedDate>Publisert 21. november 2017</PublishedDate>
		<PublishedDate hide>Publisert 21. november 2017</PublishedDate>
		<PublishedDate color="primary">Publisert 21. november 2017</PublishedDate>

		<Heading>Usage</Heading>
		<Code language="jsx">{`
import { PublishedDate } from '@aller/shiny';

<PublishedDate>Publisert 21. november 2017</PublishedDate>
<PublishedDate hide>Publisert 21. november 2017</PublishedDate>
<PublishedDate color="primary">Publisert 21. november 2017</PublishedDate>
   `}
		</Code>
		<Paragraph>
			The <code>hide</code> prop hides the date.
			The <code>color</code> prop can be any of the color names in the palette. Defaults to <code>typeLight</code>
		</Paragraph>
	</section>
);
