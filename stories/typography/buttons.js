import React from 'react';
import { DemoContainer } from '../storybook-components/index';

import { Code } from '../../src/atoms/Code';

import {
	BorderedButton,
	Row,
	Heading,
	HugeHeading, Button,
} from '../../src/index';

export default () => (
	<section>
		<HugeHeading>Buttons</HugeHeading>

		<Heading>Demo</Heading>
		<DemoContainer background="white">
			<Heading> Simple buttons </Heading>
			<Row>
				<Button> Default </Button>
				<Button background="primary"> Colored </Button>
			</Row>

			<Heading> Bordered buttons </Heading>
			<Row>
				<BorderedButton> Default </BorderedButton>
				<BorderedButton isActive> Active </BorderedButton>
			</Row>
		</DemoContainer>


		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	Row,
	Heading,
	BorderedButton,
	Button
} from '@aller/shiny';

<Heading> Simple buttons </Heading>
<Row>
	<Button> Default </Button>
	<Button background="primary"> Colored </Button>
</Row>

<Heading> Bordered buttons </Heading>
<Row>
	<BorderedButton> Default </BorderedButton>
	<BorderedButton isActive> Active </BorderedButton>
</Row>
			`}
		</Code>
	</section>
);

