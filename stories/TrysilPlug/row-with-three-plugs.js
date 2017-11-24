/* eslint-disable max-len */
import React from 'react';

import Heading, { HugeHeading } from '../../src/atoms/Heading';
import Row from '../../src/atoms/Row';
import Col from '../../src/atoms/Col';
import TrysilPlug from '../../src/molecules/TrysilPlug';

export default () => (
	<section>
		<HugeHeading>TrysilPlug</HugeHeading>

		<p>A row with three TrysilPlugs.</p>

		<Heading>Usage</Heading>
		<Row>
			<Col xs>
				<TrysilPlug
					kicker="Oppmerksomhet"
					title="Hva skal vi plugge i dag, da?"
					subtitle="Det blir vel en nyhetsartikkel igjen, tenker jeg."
					image="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=980&height=490&compression=60"
					url="https://example.com"
					labels={[
						{
							text: 'Meninger',
							color: 'orange',
						},
						{
							text: 'I am label',
							color: 'blue',
						},
					]}
				/>
			</Col>
			<Col xs>
				<TrysilPlug
					title="Politiet vil fengsle SOS Rasisme-leder i fire uker"
					subtitle="Ifølge politiet tappet Kjell Gunnar Larsen SOS Rasisme for beløp i millionklassen."
					image="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=980&height=490&compression=60"
					url="https://example.com"
					labels={[
						{
							text: 'Meninger',
							color: 'orange',
						},
						{
							text: 'I am label',
							color: 'blue',
						},
					]}
				/>
			</Col>
			<Col xs>
				<TrysilPlug
					title="Person funnet død i vannet i Skien - 62-åring savnet i samme område"
					url="https://example.com"
					subtitle="Det er ikke bekreftet om personen er en 62 år gammel mann som har vært savnet."
					labels={[
						{ text: 'Akkurat nå' },
						{
							text: 'Trump',
							color: 'pink',
						},
					]}
					image="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=980&height=490&compression=60" // eslint-disable-line max-len
				/>
			</Col>
		</Row>
	</section>
);
