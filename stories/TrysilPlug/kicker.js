/* eslint-disable max-len */
import React from 'react';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { TrysilPlug } from '../../src/molecules/TrysilPlug';

export default () => (
	<section>
		<HugeHeading>TrysilPlug</HugeHeading>
		<p>The kicker «ny dag, ny nyhet» is used as an introduction to breaking news and commercial plugs.</p>

		<Heading>Usage</Heading>
		<TrysilPlug
			kicker="Ny dag, ny nyhet"
			title="Hva skal vi plugge i dag, da?"
			subtitle="Det blir vel en nyhetsartikkel igjen, tenker jeg."
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
	</section>
);
