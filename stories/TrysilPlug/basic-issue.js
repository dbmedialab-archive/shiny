/* eslint-disable max-len */
import React from 'react';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import TrysilPlug from '../../src/molecules/TrysilPlug';

export default () => (
	<section>
		<HugeHeading>TrysilPlug</HugeHeading>
		<p>
			A basic plug for linking to stuff we want readers to click on.
			Written with front page links to news articles in mind. Maybe also suitable for commercial plugs or similar.
		</p>

		<p>
			<strong>TODO:</strong> Consider changing the label.color to take a skinColor property name instead of a plain
			color.
		</p>

		<Heading>Usage</Heading>
		<TrysilPlug
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
	</section>
);
