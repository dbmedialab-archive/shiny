import React from 'react';
import { DemoContainer } from '../storybook-components';

import {
	Heading,
	HugeHeading,
	DagbladetLogo,
	Row,
	Col,
} from '../../src';

import { Code } from '../../src/atoms/Code';

const DagbladetStory = () => (
	<section>
		<HugeHeading>DagbladetLogo</HugeHeading>
		<p>This svg beauty grabs all the space it can get, before displaying the Dagladet logo in all its red glory.</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<DagbladetLogo />
		</DemoContainer>

		<DemoContainer>
			<Row>
				<Col xs>
					<DagbladetLogo background="darkness" />
				</Col>
				<Col xs>
					<DagbladetLogo background="transparent" fill="type" />
				</Col>
			</Row>
		</DemoContainer>

		<Heading>Props</Heading>
		<table>
			<thead>
				<th>Prop</th>
				<th>Description</th>
				<th>Required/optional</th>
				<th>Type</th>
				<th>default</th>
			</thead>
			<tbody>
				<tr>
					<td>fill</td>
					<td>color of the text. Can be any of the strings in your theme&apos;s color object.</td>
					<td>optional</td>
					<td>string</td>
					<td>white</td>
				</tr>
				<tr>
					<td>bacground</td>
					<td>color of the text. Can be any of the strings in your theme&apos;s color object.</td>
					<td>optional</td>
					<td>string</td>
					<td>primary</td>
				</tr>
			</tbody>
		</table>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import { DagladetLogo } from '@aller/shiny';

<DagladetLogo />
			`}
		</Code>

		<Code language="jsx">
			{`
import {
	Row,
	Col,
	DagladetLogo,
} from '@aller/shiny';

<Row>
	<Col xs>
		<DagbladetLogo background="darkness" />
	</Col>
	<Col xs>
		<DagbladetLogo background="transparent" fill="type" />
	</Col>
</Row>
			`}
		</Code>
	</section>
);

export { DagbladetStory };
