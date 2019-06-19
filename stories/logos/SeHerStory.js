import React from 'react';
import { withInfo } from '@storybook/addon-info';

import {
	Row, Col,
	SeHerLogo,
} from '../../src';

const SeHerStory = () => (
	<section>
		<Row>
			<Col xs><SeHerLogo variant="default" /></Col>
			<Col xs><SeHerLogo variant="pride" /></Col>
		</Row>
	</section>
);

export default withInfo({
	text: `
<p>This svg beauty grabs all the space it can get, before displaying the SeHer
	logo in all its outwards exploding glory.</p>

<p>Variants: To display a certain variant, either register the dates for the
	variant in the component, or pass the 'variant' prop.</p>
	`,
})(SeHerStory);
