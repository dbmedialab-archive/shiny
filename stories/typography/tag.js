import React from 'react';

import { Code } from '../../src/atoms/Code';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { Tag } from '../../src/atoms/Tag';
import { TagSection } from '../../src/molecules/TagSection';
import { Row } from '../../src/atoms/Row';
import { Col } from '../../src/atoms/Col';

export default () => (
	<section>
		<HugeHeading>Tag</HugeHeading>
		<Heading>Preview</Heading>
		<Tag title="Middag" url="#" />

		<Heading>Usage</Heading>
		<Code language="jsx">{`
			import { Tag } from '@aller/shiny';

			<Tag title="Middag" url="#" />
   		`}
		</Code>


		<HugeHeading>TagSection</HugeHeading>
		<Heading>Preview</Heading>
		<Row xs>
			<Col xs={6}>
				<TagSection tags={
					[
						{
							title: 'Middag',
							url: '#',
						},
						{
							title: 'Kjøtt',
							url: '#',
						},
						{
							title: 'Helg',
							url: '#',
						},
						{
							title: 'Biff',
							url: '#',
						},
						{
							title: 'Grill',
							url: '#',
						},
						{
							title: 'Saus',
							url: '#',
						},
						{
							title: 'Asparges',
							url: '#',
						},
						{
							title: 'Sopp',
							url: '#',
						},
						{
							title: 'Potet',
							url: '#',
						},
						{
							title: 'Puré',
							url: '#',
						},
						{
							title: 'Storfe',
							url: '#',
						},
					]}
				/>
			</Col>
		</Row>
		<Heading>Usage</Heading>
		<Code language="jsx">{`
			import { TagSection } from '@aller/shiny'

			<TagSection tags={
				[
					{
						title: 'Middag',
						url: '#',
					},
					{
						title: 'Kjøtt',
						url: '#',
					},
					{
						title: 'Helg',
						url: '#',
					},
					{
						title: 'Biff',
						url: '#',
					},
					{
						title: 'Grill',
						url: '#',
					},
					{
						title: 'Saus',
						url: '#',
					},
					{
						title: 'Asparges',
						url: '#',
					},
					{
						title: 'Sopp',
						url: '#',
					},
					{
						title: 'Potet',
						url: '#',
					},
					{
						title: 'Puré',
						url: '#',
					},
					{
						title: 'Storfe',
						url: '#',
					},
				]}
			/>
			
   		`}
		</Code>
	</section>
);
