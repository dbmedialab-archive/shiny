/* eslint-disable max-len */
import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { TrysilPlug } from '../../src/molecules/TrysilPlug';
import { Row } from '../../src/atoms/Row';

const TrysilPlugStory = () => (
	<section>
		<Row>
			<TrysilPlug
				title="Hva skal vi plugge i dag, da?"
				subtitle="Det blir vel en nyhetsartikkel igjen, tenker jeg."
				placeholderUrl="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=98&height=49&compression=30"
				url="https://example.com"
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
				column={{
					xs: 12,
					md: 4,
				}}
			/>
			<TrysilPlug
				title="Hva skal vi plugge i dag, da?"
				subtitle="Det blir vel en nyhetsartikkel igjen, tenker jeg."
				placeholderUrl="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=98&height=49&compression=30"
				url="https://example.com"
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
				column={{
					xs: 12,
					md: 8,
				}}
			/>
		</Row>
	</section>
);

export default withInfo({
	text: `
<Paragraph>
	A basic plug for linking to stuff we want readers to click on.
	Written with front page links to news articles in mind. Maybe also suitable for commercial plugs or similar.

	This specific plug is a column disguised as an article tag.
</Paragraph>

<Paragraph>
	<strong>TODO:</strong> Consider changing the label.color to take a skinColor property name instead of a plain
	color.
</Paragraph>
	`,
})(TrysilPlugStory);
