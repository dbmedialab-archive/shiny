import React from 'react';

import { DemoContainer } from '../storybook-components';

import { Code } from '../../src/atoms/Code';

import {
	Paragraph,
	Heading,
	Row,
	HugeHeading,
	SmallHeading,
	Dot,
} from '../../src';
/* eslint-disable react/no-unescaped-entities */
export default () => (
	<section>
		<HugeHeading>Dot</HugeHeading>
		<Paragraph>Simple Dot component</Paragraph>
		<Paragraph>Size based on theme variable "horizontalBase"</Paragraph>
		<Paragraph>Works with theme's colors</Paragraph>
		<Heading>Demo</Heading>
		<DemoContainer>
			<Row around="xs">
				<Dot />
				<Dot size="medium" color="primaryLight" />
				<Dot size="large" color="primaryLighter" />
				<Dot size="small" color="primaryDark" />
				<Dot size="xsmall" color="secondaryLight" />
				<Dot size="not correct size" color="secondaryLighter" />
				<Dot size="large" color="secondaryDark" />
				<Dot color="secondary" />
			</Row>
		</DemoContainer>
		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
			import {
				Row,
				Dot
			} from '@aller/shiny';
			<Row between="xs">
				<Dot />
				<Dot size="medium" color="primaryLight" />
				<Dot size="large" color="primaryLighter" />
				<Dot size="small" color="primaryDark" />
				<Dot size="xsmall" color="secondaryLight" />
				<Dot size="not correct size" color="secondaryLighter" />
				<Dot size="large" color="secondaryDark" />
				<Dot color="not correct color" />
			</Row>
			`}
		</Code>
		<SmallHeading>Props</SmallHeading>
		<table>
			<thead>
				<tr>
					<th>Prop</th>
					<th>Description</th>
					<th>Required/optional</th>
					<th>Type</th>
					<th>default</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>color</td>
					<td>Name of theme's color</td>
					<td>optional</td>
					<td>primary</td>
				</tr>
				<tr>
					<td>size</td>
					<td>One of: xsmall, small, medium, large</td>
					<td>optional</td>
					<td>medium</td>
				</tr>
			</tbody>
		</table>
	</section>
);
