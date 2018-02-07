/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Code } from '../../src/atoms/Code';

import { Row } from '../../src/atoms/Row';
import { Col } from '../../src/atoms/Col';

import { HugeHeading, SmallHeading } from '../../src/atoms/Heading';
import { SvgIcon } from '../../src/atoms/SvgIcon';


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

<SvgIcon name="easy-difficulty" size={5} />
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
							<td>size</td>
							<td>The size of the Icon in rem</td>
							<td>optional</td>
							<td>int</td>
							<td>size of wrapping element</td>
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
				<SvgIcon name="activity" />
				<div>activity</div>
			</Col>

			<Col xs={2}>
				<SvgIcon name="easy-difficulty" />
				<div>easy-difficulty</div>
			</Col>
			<Col xs={2}>
				<SvgIcon name="medium-difficulty" />
				<div>medium-difficulty</div>
			</Col>
			<Col xs={2}>
				<SvgIcon name="high-difficulty" />
				<div>high-difficulty</div>
			</Col>
			<Col xs={2}>
				<SvgIcon name="nut" />
				<div>nut</div>
			</Col>
			<Col xs={2}>
				<SvgIcon name="fish" />
				<div>fish</div>
			</Col>
			<Col xs={2}>
				<SvgIcon name="gluten" />
				<div>gluten</div>
			</Col>
			<Col xs={2}>
				<SvgIcon name="pork" />
				<div>pork</div>
			</Col>
			<Col xs={2}>
				<SvgIcon name="total-time" />
				<div>total-time</div>
			</Col>
			<Col xs={2}>
				<SvgIcon name="vegan" />
				<div>vegan</div>
			</Col>
			<Col xs={2}>
				<SvgIcon name="vegetarian" />
				<div>vegetarian</div>
			</Col>
		</Row>
	</section>
);
