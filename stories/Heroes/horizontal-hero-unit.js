import React from 'react';

import { PaddedGrid  } from '../../src/storybook-decorators/PaddedGrid';
import { Code } from '../../src/atoms/Code';
import {
	HugeHeading,
	Heading,
	Row,
	Col,
	SmallHorizontalHeroUnit,
	MediumHorizontalHeroUnit,
	LargeHorizontalHeroUnit,
} from '../../src';

/* eslint-disable max-len */
const image = {
	placeholder: 'https://www.dagbladet.no/mat/bilder/c/xl/1/bcff2fea-biff-med-asparges-og-soppsaus.jpg',
	src: 'https://www.dagbladet.no/mat/bilder/c/xl/1/bcff2fea-biff-med-asparges-og-soppsaus.jpg',
	ratio: 0.5,
	fallbackSrc: '',
};

const title = 'Stekt kjøtt';

export default () => (
	<section>
		<PaddedGrid>
			<Row>
				<Col xs={12}>
					<HugeHeading>Recipe Hero Unit</HugeHeading>
					<p>Showcase a large preview image and a header with an optional IconBar.</p>
					<p>
						This component returns a <code>Row</code>, so you might want to use it inside a <code>Grid</code> or
						<code>Col</code> element.
					</p>

					<Heading>Demo</Heading>
					<LargeHorizontalHeroUnit
						image={image}
						title={title}
					/>
				</Col>
				<Col xs={8}>
					<MediumHorizontalHeroUnit
						image={image}
						title={title}
					/>
				</Col>
				<Col xs={6}>
					<SmallHorizontalHeroUnit
						image={image}
						title={title}
					/>
				</Col>
				<Col xs={12}>
					<SmallHorizontalHeroUnit
						video={{
							src: 'https://www.dagbladet.no/video/embed/sYc2RnQz8ko?autoplay=false&showinfo=0',
						}}
						type="video"
						title={title}
					/>
				</Col>
			</Row>
			<Row>
				<Col xs>
					<Heading>Usage</Heading>
					<Code language="jsx">
						{`
import {
	SmallHorizontalHeroUnit,
	// MediumHorizontalHeroUnit,
	// LargeHorizontalHeroUnit,
} from '@aller/shiny';

<SmallHorizontalHeroUnit
	image={{
		placeholder: 'https://www.dagbladet.no/mat/bilder/c/xl/1/bcff2fea-biff-med-asparges-og-soppsaus.jpg',
		src: 'https://www.dagbladet.no/mat/bilder/c/xl/1/bcff2fea-biff-med-asparges-og-soppsaus.jpg',
		ratio: 0.5,
		fallbackSrc: '',
	}}
	title="Stekt kjøtt"
/>

<SmallHorizontalHeroUnit
	video={{
		src: 'https://www.dagbladet.no/video/embed/sYc2RnQz8ko?autoplay=false&showinfo=0'
	}}
	type="video"
	title="Stekt kjøtt"
/>

					`}
					</Code>
				</Col>
			</Row>
		</PaddedGrid>
	</section>

);
