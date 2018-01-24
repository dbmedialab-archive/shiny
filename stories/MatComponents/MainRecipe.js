import React from 'react';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { MainRecipe } from '../../src/organisms/MainRecipe';

export default () => (
	<section>
		<HugeHeading>Mat</HugeHeading>
		<Heading>Main Recipe</Heading>
		<MainRecipe />
	</section>
);
