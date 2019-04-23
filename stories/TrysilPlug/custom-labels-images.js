/* eslint-disable max-len */
import React from 'react';

import { TrysilPlug } from '../../src/molecules/TrysilPlug';
import { OverlayingImageLabels } from '../../src/molecules/OverlayingImageLabels';
import { Paragraph, HugeHeading } from '../../src';

export default () => (
	<section>
		<HugeHeading>TrysilPlug</HugeHeading>
		<Paragraph>The Labels component in TrysilPlug could be images.</Paragraph>
		<TrysilPlug
			Labels={OverlayingImageLabels}
			labelsProps={{ order: 2 }}
			title="Hva skal vi plugge i dag, da?"
			subtitle="Det blir vel en nyhetsartikkel igjen, tenker jeg."
			placeholderUrl="https://2.dbstatic.no/69782034.jpg?imageId=69782034&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=98&height=49&compression=30"
			url="https://example.com"
			image="https://2.dbstatic.no/69782034.jpg?imageId=69782034&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=980&height=490&compression=70"
			ratio={0.5}
			preventBlur
			labels={[
				{
					src: 'https://via.placeholder.com/100x100',
					alt: 'test icon image',
					width: '10rem',
					height: '10rem',
				},
				{
					src: 'https://via.placeholder.com/100x100',
					alt: 'test icon image',
					width: '10rem',
					height: '10rem',
				},
			]}
		/>
	</section>
);
