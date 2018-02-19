import React from 'react';

import {
	SmallHorizontalHeroUnit,
	MediumHorizontalHeroUnit,
	LargeHorizontalHeroUnit,
} from '../../src/molecules/HorizontalHeroUnit';
import { PaddedGrid  } from '../../src/storybook-decorators/PaddedGrid';
import { Code } from '../../src/atoms/Code';
import {
	HugeHeading,
	Heading,
	Row,
	Col,
} from '../..';

/* eslint-disable max-len */
const image = {
	placeholder: 'https://www.dagbladet.no/mat/bilder/c/xl/1/bcff2fea-biff-med-asparges-og-soppsaus.jpg',
	src: 'https://www.dagbladet.no/mat/bilder/c/xl/1/bcff2fea-biff-med-asparges-og-soppsaus.jpg',
	ratio: 0.5,
	fallbackSrc: '',
};

const title = 'Stekt kjøtt';
/* eslint-enable max-len */

export default () => (
	<section>
		<PaddedGrid>
			<Row>
				<Col xs={12}>
					<HugeHeading>Recipe Hero Unit</HugeHeading>
					<p>Showcase a large preview image and a header with an optional IconBar.</p>

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
					`}
					</Code>
				</Col>
			</Row>
		</PaddedGrid>
	</section>

);
