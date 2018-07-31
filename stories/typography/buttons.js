import React from 'react';
import { DemoContainer } from '../storybook-components/index';

import { Code } from '../../src/atoms/Code';

import {
	BorderedButton,
	Row,
	Heading,
	HugeHeading,
	Button,
	RoundedButton,
	SmallRoundedButton,
	TinyRoundedButton,
	FontIcon,
} from '../../src/index';

export default () => (
	<section>
		<HugeHeading>Buttons</HugeHeading>

		<Heading>Demo</Heading>
		<DemoContainer background="white">
			<Heading> Simple buttons </Heading>
			<Row>
				<Button> Large Default </Button>
				<Button background="primary"> Large Colored </Button>
			</Row>
			<Row>
				<Button size="medium"> Medium Default </Button>
				<Button background="primary" size="medium"> Medium Colored </Button>
			</Row>
			<Row>
				<Button size="small"> Small Default </Button>
				<Button background="primary" size="small"> Small Colored </Button>
			</Row>

			<Heading> Bordered buttons </Heading>
			<Row>
				<BorderedButton> Default </BorderedButton>
				<BorderedButton isActive> Active </BorderedButton>
			</Row>

			<Heading> Rounded button </Heading>
			<Row>
				<RoundedButton>default background</RoundedButton>
			</Row>
			<Row>
				<RoundedButton>
					with icon
					<FontIcon name="arrow-alt-right" size="1" />
				</RoundedButton>
			</Row>

			<Heading> Small rounded button </Heading>
			<Row>
				<SmallRoundedButton background="secondary">secondary background</SmallRoundedButton>
			</Row>

			<Heading> Tiny rounded button </Heading>
			<Row>
				<TinyRoundedButton background="secondary" color="primaryLight">primaryLight text color</TinyRoundedButton>
			</Row>
		</DemoContainer>


		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	BorderedButton,
	Row,
	Heading,
	Button,
	RoundedButton,
	SmallRoundedButton,
	TinyRoundedButton,
	FontIcon,
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

<Heading> Rounded button </Heading>
<Row>
	<RoundedButton>default background</RoundedButton>
</Row>
<Row>
	<RoundedButton>
		with icon
		<FontIcon name="arrow-alt-right" size="1" />
	</RoundedButton>
</Row>

<Heading> Small rounded button </Heading>
<Row>
	<SmallRoundedButton background="secondary">secondary background</SmallRoundedButton>
</Row>

<Heading> Tiny rounded button </Heading>
<Row>
	<TinyRoundedButton background="secondary" color="primaryLight">primaryLight text color</TinyRoundedButton>
</Row>
			`}
		</Code>
	</section>
);
