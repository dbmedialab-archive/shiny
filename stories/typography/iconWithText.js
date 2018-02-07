/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Code } from '../../src/atoms/Code';

import { Row } from '../../src/atoms/Row';
import { Col } from '../../src/atoms/Col';

import { HugeHeading, SmallHeading } from '../../src/atoms/Heading';
import { IconWithText } from '../../src/atoms/IconWithText';

export default () => (
	<section>
		<Row>
			<Col xs={12}>
				<HugeHeading>Icon with text</HugeHeading>
				<p>SVG ICONS WITH BOTTOM TEXT</p>
				<SmallHeading>Usage</SmallHeading>
				<Code language="jsx">
					{`
import { IconWithText } from '@aller/shiny';

<IconWithText name="gluten" text="I'm an icon" iconSize={6} textSize={2} />
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
							<td>text</td>
							<td>Text</td>
							<td>required</td>
							<td>string</td>
						</tr>
						<tr>
							<td>name</td>
							<td>The name of the Icon</td>
							<td>required</td>
							<td>string</td>
						</tr>
						<tr>
							<td>iconSize</td>
							<td>The size of the Icon in rem</td>
							<td>optional</td>
							<td>int</td>
							<td>5</td>
						</tr>
						<tr>
							<td>textSize</td>
							<td>The size of the text in rem</td>
							<td>optional</td>
							<td>int</td>
							<td>1.6</td>
						</tr>
					</tbody>
				</table>
			</Col>
		</Row>

		<Row>
			<Col xs={12}><SmallHeading>Demo</SmallHeading></Col>
		</Row>

		<Row>

			<Col xs={2}>
				<IconWithText iconSize={3} textSize={1} text="It's a tiny icon" name="gluten" />
			</Col>
			<Col xs={2}>
				<IconWithText iconSize={5} textSize={2} text="It's a small icon" name="gluten" />
			</Col>
			<Col xs={3}>
				<IconWithText iconSize={8} textSize={3} text="It's a medium icon" name="gluten" />
			</Col>
			<Col xs={5}>
				<IconWithText iconSize={15} textSize={5} text="It's a big icon" name="gluten" />
			</Col>
		</Row>

	</section>
);
