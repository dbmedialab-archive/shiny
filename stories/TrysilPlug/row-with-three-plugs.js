/* eslint-disable max-len */
import React from 'react';

import {
	Heading, HugeHeading,
	Row, Col,
	Paragraph,
	TrysilPlug,
} from '../../src';

export default () => (
	<section>
		<HugeHeading>TrysilPlug</HugeHeading>

		<Paragraph>A row with three TrysilPlugs.</Paragraph>

		<Heading>Usage</Heading>
		<Row>
			<Col xs>
				<TrysilPlug
					kicker="Oppmerksomhet"
					title="Hva skal vi plugge i dag, da?"
					subtitle="Det blir vel en nyhetsartikkel igjen, tenker jeg."
					url="https://example.com"
					placeholderUrl="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=98&height=49&compression=30"
					image="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=980&height=490&compression=70"
					ratio={0.5}
					labels={[
						{
							text: 'Meninger',
							backgroundColor: 'orange',
						},
						{
							text: 'I am label',
							backgroundColor: 'blue',
						},
					]}
				/>
			</Col>
			<Col xs>
				<TrysilPlug
					title="Politiet vil fengsle SOS Rasisme-leder i fire uker"
					subtitle="Ifølge politiet tappet Kjell Gunnar Larsen SOS Rasisme for beløp i millionklassen."
					placeholderUrl="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=98&height=49&compression=30"
					image="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=980&height=490&compression=70"
					ratio={0.5}
					url="https://example.com"
					labels={[
						{
							text: 'Meninger',
							backgroundColor: 'orange',
						},
						{
							text: 'I am label',
							backgroundColor: 'blue',
						},
					]}
				/>
			</Col>
			<Col xs>
				<TrysilPlug
					title="Person funnet død i vannet i Skien - 62-åring savnet i samme område"
					url="https://example.com"
					subtitle="Det er ikke bekreftet om personen er en 62 år gammel mann som har vært savnet."
					placeholderUrl="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=98&height=49&compression=30"
					image="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=980&height=490&compression=70"
					ratio={0.5}
					labels={[
						{ text: 'Akkurat nå' },
						{
							text: 'Trump',
							backgroundColor: 'pink',
						},
					]}
				/>
			</Col>
		</Row>
	</section>
);
