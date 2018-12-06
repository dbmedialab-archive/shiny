import React from 'react';
import styled from '@emotion/styled';

import { Code } from '../../src/atoms/Code';
import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { DemoContainer } from '../storybook-components';
import { TrysilPlug } from '../../src';
import { Carousel } from '../../src/molecules/Carousel';
import { Row } from '../../src/atoms/Row';
import { Col } from '../../src/atoms/Col';
import { Kicker } from '../../src/atoms/Kicker';

const prototypeItem = {
	title: 'Item',
	image: 'https://via.placeholder.com/250x125',
	url: 'http://www.example.com/',
};

const CustomHeader = styled(Kicker)`
	margin-bottom: 1rem;
`;

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

	const customHeader = <CustomHeader>Demo vertical carousel (no mouse events)</CustomHeader>;

	return (
		<section>
			<HugeHeading>Carousel</HugeHeading>
			<Heading>Demo</Heading>

			<DemoContainer>
				<Row>
					<Carousel label="Demo horizontal carousel (with mouse events)">
						{children}
					</Carousel>
				</Row>

				<Row>
					<Col md={5} xs={12}>
						<Carousel vertical withMouseEvents={false} label={customHeader}>
							{children}
						</Carousel>
					</Col>
				</Row>
			</DemoContainer>

			<Heading>Usage</Heading>
			<Code language="jsx">
				{`
import { 
	TrysilPlug, 
	Carousel,
 } from '@aller/shiny';

<Carousel vertical withMouseEvents={false}>
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

export { CarouselStory };
