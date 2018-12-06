import React from 'react';

import { Code } from '../../src/atoms/Code';
import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { DemoContainer } from '../storybook-components';
import { TrysilPlug } from '../../src';
import Carousel from '../../src/molecules/Carousel';

const prototypeItem = {
	title: 'Item',
	image: 'https://via.placeholder.com/150',
	url: 'http://www.example.com/',
};

const CarouselStory = () => {
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
				<Carousel label="Demo label">
					{children}
				</Carousel>
			</DemoContainer>
		</section>
	);
};

export { CarouselStory };
