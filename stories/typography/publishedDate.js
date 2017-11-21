import React from 'react';

import LeetTextarea from '../../src/atoms/LeetTextarea';

import { SiteSelection } from '../storybook-components';
import Heading, { SmallHeading } from '../../src/atoms/Heading';
import PublishedDate from '../../src/atoms/PublishedDate';

export default () => (
	<SiteSelection>
		<section>
			<Heading>PublishedDate</Heading>
			<SmallHeading>Preview</SmallHeading>
			<PublishedDate>Publisert 21. november 2017</PublishedDate>

			<SmallHeading>Usage</SmallHeading>
			<LeetTextarea>{`
import PublishedDate from '/path/to/src/atoms/PublishedDate';

<PublishedDate>Publisert 21. november 2017</PublishedDate>
<PublishedDate hide>Publisert 21. november 2017</PublishedDate>
      `}
			</LeetTextarea>
			<p>
				The «hide» prop hides the date.
				The «color» prop can be any of the color names in the palette. Defaults to «grayTintDark»
			</p>
		</section>
	</SiteSelection>
);
