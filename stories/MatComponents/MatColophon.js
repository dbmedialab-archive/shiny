import React from 'react';

import { StorybookPaddedGrid      } from '../../src/storybook-decorators/PaddedGrid';
import { HugeHeading 	   } from '../../src';
import { OppskriftFooter } from '../../src/molecules/Footers/OppskriftFooter';

const MatColophon = () => (
	<section>
		<StorybookPaddedGrid>
			<HugeHeading>Mat-like Colophon</HugeHeading>
			<OppskriftFooter />
		</StorybookPaddedGrid>
	</section>
);

export default MatColophon;
