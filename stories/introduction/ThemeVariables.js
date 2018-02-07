import React from 'react';
import prettyFormat from 'pretty-format';

import defaultTheme from '../../src/themes/default-theme';

import { Heading, HugeHeading, SmallHeading } from '../../src/atoms/Heading';

import { Code } from '../../src/atoms/Code';

const ThemeVariables = () => {
	return (
		<section>
			<HugeHeading>Variables</HugeHeading>
			<p>These theme variables are available for you to parameterize the components you write.</p>

			<Heading>Variables</Heading>

			<SmallHeading>Color Palette</SmallHeading>
			<Code language="js">
				{prettyFormat(Object.assign({}, defaultTheme.colors, { skinColors: 'See next section' }))}
			</Code>
			<SmallHeading>Skin Colors</SmallHeading>
			<Code language="js">
				{prettyFormat(defaultTheme.colors.skinColors)}
			</Code>
			<SmallHeading>Variables</SmallHeading>
			<Code language="js">
				{prettyFormat(defaultTheme.variables)}
			</Code>
			<SmallHeading>Flexboxgrid</SmallHeading>
			<Code language="js">
				{prettyFormat(defaultTheme.flexboxgrid)}
			</Code>
		</section>
	);
};

export default ThemeVariables;
