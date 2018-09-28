/* eslint-disable max-len */
import React from 'react';

import {
	Heading,
	HugeHeading,
	TrysilPlug,
} from '../../src';

import { Code } from '../../src/atoms/Code';

export default () => (
	<section>
		<HugeHeading>TrysilPlug with ALL CAPS</HugeHeading>
		<p>Sometimes editors will prefer it if we scream out the news. Online, we do that with ALL CAPS.</p>
		<p>Set the <var>headingProps.ALLCAPS</var> prop, and you will achieve what you want.</p>

		<Heading>Usage</Heading>
		<TrysilPlug
			headingProps={{
				ALLCAPS: true,
			}}
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

		<Heading>Usage</Heading>
		<Code>
			{`
import {
	Heading,
	HugeHeading,
	TrysilPlug,
	Code,
} from '@aller/shiny';

<TrysilPlug
	headingProps={{
		ALLCAPS: true,
	}}
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
			color: 'orange',
		},
		{
			text: 'I am label',
			color: 'blue',
		},
	]}
/>
			`}
		</Code>
	</section>
);
