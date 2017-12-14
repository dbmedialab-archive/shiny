/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Code } from '../../src/atoms/Code';

import { Row } from '../../src/atoms/Row';
import { Col } from '../../src/atoms/Col';

import { HugeHeading, SmallHeading } from '../../src/atoms/Heading';
import { Dice } from '../../src/molecules/Dice';

export default () => (
	<section>
		<Row>
			<Col xs={12}>
				<HugeHeading>Dice</HugeHeading>
				<p>A dice with 1-6 pips. In Norwegian newspapers, the dice is often used as a rating metaphor.</p>
				<SmallHeading>Usage</SmallHeading>
				<Code>
					{`
import { Dice } from '@aller/shiny';

<Dice value={1} />
					`}
				</Code>
				<SmallHeading>Props</SmallHeading>
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
							<td>value</td>
							<td>How many pips there should be on the selected side of dice</td>
							<td>Required</td>
							<td>number (1-6)</td>
							<td />
						</tr>
						<tr>
							<td>color</td>
							<td>The color of the backfill of the face. Could be any of the shaded colors defined in the
								theme's color section.
							</td>
							<td>optional</td>
							<td>string</td>
							<td>"primary"</td>
						</tr>
						<tr>
							<td>faceShade</td>
							<td>The face of the dice has a shade. This prop allows you to specify which </td>
							<td>optional</td>
							<td>one of "", "Dark", "Light", "Lighter"</td>
							<td>"Dark"</td>
						</tr>
						<tr>
							<td>pipColor</td>
							<td>The color of the pips (dots) on the dice. Could be any of the colors defined in your theme's
								color section.
							</td>
							<td>optional</td>
							<td>string</td>
							<td>"white"</td>
						</tr>
						<tr>
							<td>size</td>
							<td>Width and height of the dice.</td>
							<td>optional</td>
							<td>string</td>
							<td>"2.4rem"</td>
						</tr>
						<tr>
							<td>borderRadius</td>
							<td>You can specify a border-radius if you'd like your dice to have rounded corner. Include a as
								well, for example ".4rem" or "10%".
							</td>
							<td>optional</td>
							<td>string</td>
							<td>"0"</td>
						</tr>
						<tr>
							<td>theme</td>
							<td>The theme prop will be provided by styled-components' ThemeProvider.</td>
							<td>required</td>
							<td>object</td>
							<td>default theme</td>
						</tr>
					</tbody>
				</table>
			</Col>
		</Row>

		<Row>
			<Col xs={12}><SmallHeading>Demo</SmallHeading></Col>
		</Row>

		<Row>
			<Col xs><Dice value={1} size="100%" /></Col>
			<Col xs><Dice value={2} size="100%" /></Col>
			<Col xs><Dice value={3} size="100%" /></Col>
			<Col xs><Dice value={4} size="100%" /></Col>
			<Col xs><Dice value={5} size="100%" /></Col>
			<Col xs><Dice value={6} size="100%" /></Col>

			<Col xs><Dice value={1} size="100%" color="secondary" /></Col>
			<Col xs><Dice value={2} size="100%" color="secondary" /></Col>
			<Col xs><Dice value={3} size="100%" color="secondary" /></Col>
			<Col xs><Dice value={4} size="100%" color="secondary" /></Col>
			<Col xs><Dice value={5} size="100%" color="secondary" /></Col>
			<Col xs><Dice value={6} size="100%" color="secondary" /></Col>
		</Row>

		<Row>
			<Col xs><Dice value={1} color="pink"   size="100%" /></Col>
			<Col xs><Dice value={2} color="purple" size="100%" /></Col>
			<Col xs><Dice value={3} color="blue"   size="100%" /></Col>
			<Col xs><Dice value={4} color="teal"   size="100%" borderRadius="10%" /></Col>
			<Col xs><Dice value={5} color="green"  size="100%" borderRadius="10%" /></Col>
			<Col xs><Dice value={6} color="yellow" size="100%" borderRadius="10%" /></Col>
		</Row>

		<Row>
			<Col xs><Dice value={2} color="orange"   size="100%" /></Col>
			<Col xs><Dice value={2} color="navy"     size="100%" /></Col>
			<Col xs><Dice value={2} color="burgundy" size="100%" /></Col>
			<Col xs><Dice value={2} color="brown"    size="100%" borderRadius="10%" /></Col>
			<Col xs><Dice value={2} color="sand"     size="100%" borderRadius="10%" /></Col>
			<Col xs><Dice value={2} color="darkness" size="100%" borderRadius="10%" /></Col>
		</Row>

		<Row>
			<Col xs><Dice value={2} size="100%" color="yellowLight" faceShade="Lighter" pipColor="purpleDark" /></Col>
			<Col xs><Dice value={3} size="100%" color="secondary"                       pipColor="primary" /></Col>
			<Col xs><Dice value={4} size="100%" color="teal"                            pipColor="yellow" /></Col>
		</Row>
		<Row>
			<Col xs={6}><Dice value={6} size="100%" borderRadius="10%" /></Col>
			<Col xs={6}><Dice value={6} size="100%" borderRadius="10%" faceShade="Light" /></Col>
		</Row>


	</section>
);
