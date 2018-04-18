import React from 'react';

import { HugeHeading, XLargeHeading, Heading, NumberedListItem, NumberedList, Code } from '../../src';
import { DemoContainer } from '../storybook-components';

export default () => (
	<section>
		<HugeHeading>Numbered List</HugeHeading>
		<XLargeHeading> You can pass an array to  {'<NumberedList items="[ ]">'} or use {'<NumberedListItem>'} directly.</XLargeHeading>

		<Heading>Demo</Heading>
		<DemoContainer>
			<NumberedList items={['Celery', 'Apple', 'Cucumber']} />
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import { NumberedList } from '@aller/shiny';

<NumberedList items={['Celery', 'Apple', 'Cucumber']} />
			`}
		</Code>

		<Heading>Demo</Heading>
		<DemoContainer>
			<NumberedListItem>
				Nulla porttitor accumsan tincidunt.
			</NumberedListItem>
			<NumberedListItem>
				Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus
				nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit,
				eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor
				lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit,
				eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada.
			</NumberedListItem>
			<NumberedListItem>
				Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada.
			</NumberedListItem>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import { NumberedListItem } from '@aller/shiny';

<NumberedListItem>
	Nulla porttitor accumsan tincidunt.
</NumberedListItem>
<NumberedListItem>
	Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus
	nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit,
	eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor
	lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit,
	eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada.
</NumberedListItem>
<NumberedListItem>
	Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada.
</NumberedListItem>
			`}
		</Code>

		<XLargeHeading> Any other element can be put in between list items. Or they can also be wrapped in any other element. </XLargeHeading>
		<Heading>Demo</Heading>
		<DemoContainer>
			<Heading>How to pet a cat</Heading>
			<NumberedListItem> Start with a soft chin-scratch.</NumberedListItem>
			<NumberedListItem> Focus on the area between or behind the ears. </NumberedListItem>
			<img
				src="https://static.boredpanda.com/blog/wp-content/uploads/2014/05/how-properly-pet-animals-1.jpg"
				alt=""
			/>
			<NumberedListItem> Pet its cheeks just behind the whiskers </NumberedListItem>
			<div style={{ color: 'cadetblue' }}>
				<NumberedListItem> Gently run the back of your hand along the side of face </NumberedListItem>
			</div>
			<NumberedListItem> Stroke the cat from forehead to tail </NumberedListItem>
		</DemoContainer>
		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import { NumberedListItem } from '@aller/shiny';

<Heading>How to pet a cat</Heading>
<NumberedListItem> Start with a soft chin-scratch.</NumberedListItem>
<NumberedListItem> Focus on the area between or behind the ears. </NumberedListItem>
<img
	src="https://static.boredpanda.com/blog/wp-content/uploads/2014/05/how-properly-pet-animals-1.jpg"
	alt=""
/>
<NumberedListItem> Pet its cheeks just behind the whiskers </NumberedListItem>
<div style={{ color: 'cadetblue' }}>
	<NumberedListItem> Gently run the back of your hand along the side of face </NumberedListItem>
</div>
<NumberedListItem> Stroke the cat from forehead to tail </NumberedListItem>
			`}
		</Code>
	</section>
);
