import React from 'react';

import { PaddedGrid      } from '../../src/storybook-decorators/PaddedGrid';
import { HugeHeading 	   } from '../../src';
import { OppskriftFooter } from '../../src/molecules/Footers/OppskriftFooter';

const MatColophon = () => (
	<section>
		<PaddedGrid>
			<HugeHeading>Mat-like Colophon</HugeHeading>
			<OppskriftFooter />
		</PaddedGrid>
	</section>
);

export default MatColophon;
