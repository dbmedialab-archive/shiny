/* eslint-disable max-len */
import React from 'react';

import { Code } from '../../src/atoms/Code';
import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { GenericAd } from '../../src/molecules/GenericAd';

export default () => (
	<section>
		<HugeHeading>Generic Ad</HugeHeading>
		<p>This is a component to be used with dumb ads. E.g. medium-rectangle, banner, netboard etc. Smart ads should be in an own component (e.g. sticky right)</p>

		<Heading>Demo medium-rectangle</Heading>
		<GenericAd
			width={'320px'}
			height={'250px'}
		>
			<img src="https://via.placeholder.com/320x250" alt="placeholder" />
		</GenericAd>

		<Heading>Demo netboard</Heading>
		<GenericAd
			width={'580px'}
			height={'500px'}
		>
			<img src="https://via.placeholder.com/580x500" alt="placeholder" />
		</GenericAd>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import { GenericAd } from '@aller/shiny';

<GenericAd width={'320px'} height={'250px'}>
  // Put ad component here, e.g. react-gpt's <GPT> tag instead of just <img>
  <img src="https://via.placeholder.com/320x250" alt="placeholder" />
</GenericAd>
`}
		</Code>
	</section>
);
