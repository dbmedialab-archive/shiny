import React from 'react';

import LeetTextarea from '../../src/atoms/LeetTextarea';

import Heading from '../../src/atoms/Heading';
import Dice from '../../src/atoms/Dice';

export default () => (
	<section>
		<Heading>Dice</Heading>

		<Dice value="1" />
		<Dice value="2" />
		<Dice value="3" />
		<Dice value="4" />
		<Dice value="5" />
		<Dice value="6" />

		<Dice value="1" size={{ width: '200px', height: '200px' }} />

		<Heading>Usage</Heading>
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
