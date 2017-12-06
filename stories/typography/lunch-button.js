import React from 'react';

import LeetTextarea from '../../src/atoms/LeetTextarea';
import Row from '../../src/atoms/Row';
import Heading, { HugeHeading } from '../../src/atoms/Heading';
import { LunchButton } from '../../src/molecules/LunchButton';

export default () => (
	<section>
		<HugeHeading>LunchButton</HugeHeading>

		<p>A button-style link with background and border. In a grid, it behaves like a grid cell.</p>

		<Row>
			<LunchButton
				slug="sport"
				title="Default"
			/>
			<LunchButton
				slug="sport"
				title="Default"
				kicker=""
			/>
			<LunchButton
				slug="sport"
				title="Primary"
				background="primary"
				color="white"
			/>
			<LunchButton
				slug="sport"
				title="Secondary"
				background="secondary"
				color="white"
			/>
			<LunchButton
				slug="sport"
				title="yellowLight"
				background="yellowLight"
				color="purpleDark"
			/>
		</Row>

		<Heading>Usage</Heading>
		<LeetTextarea>
			{`
import { LunchButton } from 'shiny/molecules/LunchButton';

<Row>
	<LunchButton
		slug="sport"
		title="Default"
	/>
	<LunchButton
		slug="sport"
		title="Default"
		kicker=""
	/>
	<LunchButton
		slug="sport"
		title="Primary"
		background="primary"
		color="white"
	/>
	<LunchButton
		slug="sport"
		title="Secondary"
		background="secondary"
		color="white"
	/>
	<LunchButton
		slug="sport"
		title="yellowLight"
		background="yellowLight"
		color="purpleDark"
	/>
</Row>
			`}
		</LeetTextarea>
	</section>
);
