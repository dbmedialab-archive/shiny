/* eslint-disable max-len */
import React from 'react';

import { Code } from '../../src/atoms/Code';
import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { LazyProgressiveImage } from '../../src/molecules/LazyProgressiveImage';
import { Source } from '../../src/molecules/Source';

const ids = [
	69082718,
	68936318,
	69123996,
	68776564,
	69198089,
	69192392,
	68939947,
];

const images = [];

ids.forEach((id) => {
	images.push({
		Source: <Source srcSet={`https://9.dbstatic.no/${id}.jpg?imageId=${id}&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=980&height=490&compression=70`} />,
		src: `https://9.dbstatic.no/${id}.jpg?imageId=${id}&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=98&height=49&compression=30`,
		ratio: 0.5,
		fallbackSrc: '',
	});
});


export default () => (
	<section>
		<HugeHeading>Lazy Image</HugeHeading>
		<p>This is a component that progressively renders and image lazily.</p>

		<Heading>Demo</Heading>
		{images.map((image, i) => (
			<LazyProgressiveImage src={image.src} ratio={image.ratio} fallbackSrc={image.fallbackSrc} key={i}>
				{image.Source}
			</LazyProgressiveImage>
		))}

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import { LazyProgressiveImage, Source } from '@aller/shiny';

<LazyProgressiveImage src={url-to-placeholder} ratio={0.5}>
	<Source srcSet={url-to-big-image} />
	<Source srcSet={url-to-medium-image} media="(min-width: 75em)" />
	<Source srcSet={url-to-small-image} media="(min-width: 48em)" />
</LazyProgressiveImage>
`}
		</Code>
	</section>
);
