/* eslint-disable max-len */
import React from 'react';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { TrysilPlug } from '../../src/molecules/TrysilPlug';
import { DymoHeading } from '../../src/atoms/DymoHeading';

export default () => (
	<section>
		<HugeHeading>DymoHeading with shade on hover</HugeHeading>
		<p>The Heading component in TrysilPlug can be swapped out by sending in another component in the Heading prop.</p>

		<Heading>Usage</Heading>
		<TrysilPlug
			Heading={DymoHeading}
			headingProps={{
				skin: {
					textColor: 'yellow',
					textHoverShade: 'lighter',
					backgroundColor: 'transparent',
				},
			}}
			title="Hva skal vi plugge i dag, da?"
			subtitle="Det blir vel en nyhetsartikkel igjen, tenker jeg."
			placeholderUrl="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=98&height=49&compression=30"
			url="https://example.com"
			image="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=980&height=490&compression=70"
			ratio={0.5}
		/>
	</section>
);
