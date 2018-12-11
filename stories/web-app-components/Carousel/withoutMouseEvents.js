import React from 'react';

import { Code } from '../../../src/atoms/Code';
import { Heading, HugeHeading } from '../../../src/atoms/Heading';
import { DemoContainer } from '../../storybook-components';
import { TrysilPlug } from '../../../src';
import { Carousel } from '../../../src/molecules/Carousel';
import { Row } from '../../../src/atoms/Row';

const prototypeItem = {
	title: 'Item',
	image: 'https://via.placeholder.com/250x125',
	url: 'http://www.example.com/',
};

const WithoutMouseEventsCarouselStory = () => {
	const testItems = Array(10).fill(prototypeItem);

	const children = testItems.map((item, i) => (
		<TrysilPlug
			title={`${item.title} ${i}`}
			image={item.image}
			url={item.url}
			ratio={0.5}
			key={item.title}
		/>
	));

	return (
		<section>
			<HugeHeading>Carousel</HugeHeading>
			<Heading>Demo</Heading>

			<DemoContainer>
				<Row>
					<Carousel withMouseEvents={false} heading="Demo carousel (without mouse events)">
						{children}
					</Carousel>
				</Row>
			</DemoContainer>

			<Heading>Usage</Heading>
			<Code language="jsx">
				{`
import { 
	TrysilPlug, 
	Carousel,
 } from '@aller/shiny';

<Carousel withMouseEvents={false}>
	<TrysilPlug
		title='Test title 1'
		image='https://via.placeholder.com/250x125'
		url='www.example.com'
		ratio={0.5}
		key='1'
	/>
</Carousel>
			`}
			</Code>
		</section>
	);
};

export { WithoutMouseEventsCarouselStory };
