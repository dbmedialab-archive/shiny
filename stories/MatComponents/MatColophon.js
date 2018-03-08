import React from 'react';

import { PaddedGrid } from '../../src/storybook-decorators/PaddedGrid';
import { HugeHeading } from '../..';
import { MatFooter } from '../../src/molecules/Footers/MatFooter';

const MatColophon = () => (
	<section>
		<PaddedGrid>
			<HugeHeading>Mat-like Colophon</HugeHeading>
			<MatFooter />
		</PaddedGrid>
	</section>
);

export default MatColophon;
