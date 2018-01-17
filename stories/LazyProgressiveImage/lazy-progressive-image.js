/* eslint-disable max-len */
import React from 'react';

import { Code } from '../../src/atoms/Code';
import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { LazyProgressiveImage } from '../../src/molecules/LazyProgressiveImage';

export default () => (
	<section>
		<HugeHeading>Lazy Image</HugeHeading>
		<p>This is a component that progressively renders and image lazily.</p>

		<Heading>Demo medium-rectangle</Heading>
		<LazyProgressiveImage imageUrl={'https://9.dbstatic.no/69082718.jpg?imageId=69082718&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=3400&height=1200&compression=100'} width="640" height="320" placeholderUrl={'https://9.dbstatic.no/69082718.jpg?imageId=69082718&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=6.4&height=3.2&compression=70'} />
		<LazyProgressiveImage imageUrl={'https://9.dbstatic.no/69082718.jpg?imageId=69082718&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=640&height=320&compression=70'} width="640" height="320" placeholderUrl={'https://9.dbstatic.no/69082718.jpg?imageId=69082718&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=6.4&height=3.2&compression=70'} />
		<LazyProgressiveImage imageUrl={'https://9.dbstatic.no/68936318.jpg?imageId=68936318&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=640&height=320&compression=70'} width="640" height="320" placeholderUrl={'https://9.dbstatic.no/68936318.jpg?imageId=68936318&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=6.4&height=3.2&compression=70'} />
		<LazyProgressiveImage imageUrl={'https://9.dbstatic.no/69123996.jpg?imageId=69123996&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=640&height=320&compression=70'} width="640" height="320" placeholderUrl={'https://9.dbstatic.no/69123996.jpg?imageId=69123996&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=6.4&height=3.2&compression=70'} />
		<LazyProgressiveImage imageUrl={'https://9.dbstatic.no/68776564.jpg?imageId=68776564&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=640&height=320&compression=70'} width="640" height="320" placeholderUrl={'https://9.dbstatic.no/68776564.jpg?imageId=68776564&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=6.4&height=3.2&compression=70'} />
		<LazyProgressiveImage imageUrl={'https://9.dbstatic.no/69198089.jpg?imageId=69198089&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=640&height=320&compression=70'} width="640" height="320" placeholderUrl={'https://9.dbstatic.no/69198089.jpg?imageId=69198089&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=6.4&height=3.2&compression=70'} />
		<LazyProgressiveImage imageUrl={'https://9.dbstatic.no/69192392.jpg?imageId=69192392&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=640&height=320&compression=70'} width="640" height="320" placeholderUrl={'https://9.dbstatic.no/69192392.jpg?imageId=69192392&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=6.4&height=3.2&compression=70'} />
		<LazyProgressiveImage imageUrl={'https://9.dbstatic.no/68939947.jpg?imageId=68939947&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=640&height=320&compression=70'} width="640" height="320" placeholderUrl={'https://9.dbstatic.no/68939947.jpg?imageId=68939947&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=6.4&height=3.2&compression=70'} />


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
