import React from 'react';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { MatHeader } from '../../src/organisms/MatHeader';

export default () => (
	<section>
		<HugeHeading>Mat</HugeHeading>
		<Heading>Header</Heading>
		<MatHeader />
	</section>
);
