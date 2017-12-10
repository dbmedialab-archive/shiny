import React from 'react';

import LeetTextarea from '../../src/atoms/LeetTextarea';

import Row from '../../src/atoms/Row';
import Col from '../../src/atoms/Col';

import { HugeHeading, SmallHeading } from '../../src/atoms/Heading';
import Dice from '../../src/molecules/Dice';

export default () => (
	<section>
		<Row>
			<Col xs={12}>
				<HugeHeading>Dice</HugeHeading>
				<p>A dice with 1-6 pips. In Norwegian newspapers, the dice is often used as a rating metaphore.</p>
			</Col>
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


		<SmallHeading>Usage</SmallHeading>
		<LeetTextarea>{`
 import Dice from '/path/to/shiny/atoms/Dice';

 <p>Og det faktum at den nå eksisterer som en kinofilm med et
 budsjett på 50 millioner dollar, er ugjendrivelig bevis på at vi
 lever i en tid der Hollywood langsomt og udramatisk er i ferd
 med å kveles av kommersialismens kalde dødsgrep.</p>

 <Dice value="1" />
            `}
		</LeetTextarea>
	</section>
);
