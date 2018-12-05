/* eslint-disable max-len */
import React from 'react';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { TrysilPlug } from '../../src/molecules/TrysilPlug';
import { OverlayingPlugLabels } from '../../src/molecules/OverlayingPlugLabels';

export default () => (
	<section>
		<HugeHeading>TrysilPlug</HugeHeading>
		<p>The Labels component in TrysilPlug can be swapped out by sending in another component in the Labels prop.</p>

		<Heading>Usage</Heading>
		<TrysilPlug
			Labels={OverlayingPlugLabels}
			labelsProps={{ order: 2 }}
			kicker="Another day, another video"
			title="What should we plug today?"
			subtitle="I guess we should plug another video again."
			placeholderUrl="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=98&height=49&compression=30"
			image="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=980&height=490&compression=70"
			ratio={0.5}
			url="https://example.com"
			labels={[
				{
					text: 'Opinions',
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
