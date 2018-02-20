import React from 'react';
import OrderedList from '../../src/molecules/OrderedList';
import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { Code } from '../../src/atoms/Code';

const mockData = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
];

export default () => (
	<section>
		<Heading>Ordered List</Heading>
		<OrderedList data={mockData} />
		<Code>{`
			import OrderedList from '../../src/molecules/OrderedList';

			<OrderedList data={dataToList} />
		`}
		</Code>
	</section>
);
