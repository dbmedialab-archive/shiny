/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Code } from '../../src/atoms/Code';

import {
	HugeHeading, SmallHeading,
	Row, Col,
	Paragraph,
	IconWithText,
} from '../../src';

export default () => (
	<section>
		<Row>
			<Col xs={12}>
				<HugeHeading>Icon</HugeHeading>
				<Paragraph>ICONS.</Paragraph>
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
				<Code language="jsx">
					{`
						import { SvgIcon } from '@aller/shiny';

						<SvgIcon color="primary" name="exclamation" value={1} size={5} />
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
				<IconWithText name="difficulty" text="difficulty" value={1} />
			</Col>
			<Col xs={2}>
				<IconWithText name="nut" text="nut" />
			</Col>
			<Col xs={2}>
				<IconWithText name="fish" text="fish (fisk)" />
			</Col>
			<Col xs={2}>
				<IconWithText name="gluten" text="gluten" />
			</Col>
			<Col xs={2}>
				<IconWithText name="pork" text="pork (uten-svinekjott)" />
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
			<Col xs={2}>
				<IconWithText name="star" text="star" color="red" />
			</Col>
			<Col xs={2}>
				<IconWithText name="oppskrift" text="oppskrift" />
			</Col>
			<Col xs={2}>
				<IconWithText name="aller" text="aller" />
			</Col>
			<Col xs={2}>
				<IconWithText name="dagbladet" text="dagbladet" />
			</Col>
			<Col xs={2}>
				<IconWithText name="circle-with-text" text="kk" />
			</Col>
			<Col xs={2}>
				<IconWithText color="primary" name="exclamation" text="exclamation" />
			</Col>
			<Col xs={2}>
				<IconWithText color="primary" name="crossed-video-camera" text="crossed-video-camera" />
			</Col>
			<Col xs={2}>
				<IconWithText color="primary" name="youtube" text="youtube" />
			</Col>
			<Col xs={2}>
				<IconWithText color="primary" name="not-found" text="not-found" />
			</Col>
			<Col xs={2}>
				<IconWithText name="oppskrift-loader" text="oppskrift-loader" />
			</Col>
			<Col xs={2}>
				<IconWithText name="play" text="play" />
			</Col>
		</Row>
	</section>
);
