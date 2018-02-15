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
				<HugeHeading>Icon</HugeHeading>
				<p>ICONS.</p>
				<SmallHeading>Usage</SmallHeading>
				<Code language="jsx">
					{`
						import { SvgIcon } from '@aller/shiny';

						<SvgIcon name="nut" size={5} />
					`}
				</Code>
				<Code language="jsx">
					{`
						import { SvgIcon } from '@aller/shiny';

						<SvgIcon name="difficulty" value={1} size={5} />
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
							<td>name</td>
							<td>The name of the Icon</td>
							<td>required</td>
							<td>string</td>
						</tr>
						<tr>
							<td>size</td>
							<td>The size of the Icon in rem</td>
							<td>optional</td>
							<td>int</td>
							<td>5</td>
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
				<IconWithText name="activity" text="activity" />
			</Col>
			<Col xs={2}>
				<IconWithText name="difficulty" value={1} />
				<div>difficulty</div>
			</Col>
			<Col xs={2}>
				<IconWithText name="nut" text="nut" />
			</Col>
			<Col xs={2}>
				<IconWithText name="fish" text="fish" />
			</Col>
			<Col xs={2}>
				<IconWithText name="gluten" text="gluten" />
			</Col>
			<Col xs={2}>
				<IconWithText name="pork" text="pork" />
			</Col>
			<Col xs={2}>
				<IconWithText name="total-time" text="total-time" />
			</Col>
			<Col xs={2}>
				<IconWithText name="vegan" text="vegan" />
			</Col>
			<Col xs={2}>
				<IconWithText name="vegetarian" text="vegetarian" />
			</Col>
			<Col xs={2}>
				<IconWithText name="double-arrow" text="double-arrow" />
			</Col>
		</Row>
	</section>
);
