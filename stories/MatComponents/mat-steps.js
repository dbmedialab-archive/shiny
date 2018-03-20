import React from 'react';

import { Row, Col, HugeHeading, Heading } from '../../src';
import { PaddedGrid as Grid } from '../../src/storybook-decorators/PaddedGrid';
import { Code } from '../../src/atoms/Code';
import { RecipeStep } from '../../src/atoms/MainRecipe/RecipeStep';

export default () => (
	<section>
		<Grid>
			<HugeHeading>RecipeStep</HugeHeading>
			<Heading>Demo</Heading>
			<Row>
				<Col xs={12}>
					<RecipeStep>
						<p>Ta ut innmaten. Dette er god basis
						for saus, så ta vare på det.
						</p>
					</RecipeStep>
					<RecipeStep>
						<p>Bind lårene sammen ved benknokene.
						Sitter vingespissene på, før dem bak
						ryggen inn mot halsen. Slik at vingene
						hviler under og støtter kalkunen.
						</p>
					</RecipeStep>
					<RecipeStep>
						<p>Ta ut innmaten. Dette er god basis for saus,
						så ta vare på det. Bind lårene sammen ved
						benknokene. Sitter vingespissene på, før
						dem bak ryggen inn mot halsen. Slik at vingene
						hviler under og støtter kalkunen.
						</p>
					</RecipeStep>
					<RecipeStep>
						<p>Bind lårene sammen ved benknokene.
						Sitter vingespissene på, før dem bak
						ryggen inn mot halsen. Slik at vingene
						hviler under og støtter kalkunen.
						</p>
					</RecipeStep>
					<RecipeStep>
						<p>Ta ut innmaten. Dette er god basis
						for saus, så ta vare på det.
						hviler under og støtter kalkunen.
						</p>
					</RecipeStep>

					<Heading>Usage</Heading>
					<Code language="jsx">
						{`
import { RecipeStep } from '@aller/shiny';

<RecipeStep>
	Some Text
</RecipeStep>
							`}
					</Code>
				</Col>
			</Row>
		</Grid>
	</section>
);
