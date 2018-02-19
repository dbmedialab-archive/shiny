import React from 'react';

import { PaddedGrid } from '../../src/storybook-decorators/PaddedGrid';
import { HugeHeading } from '../..';
import { Footer } from '../../src/organisms/Footer';

const MatColophon = () => (
	<section>
		<PaddedGrid>
			<HugeHeading>Mat-like Colophon</HugeHeading>
			<Footer />
		</PaddedGrid>
	</section>
);

export default MatColophon;
