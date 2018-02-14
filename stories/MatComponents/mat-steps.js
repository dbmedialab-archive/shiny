import React from 'react';

import { Code } from '../../src/atoms/Code';
import { RecipeStep } from '../../src/atoms/MainRecipe/RecipeStep';

export default () => (
	<section>

		<RecipeStep>
				Ta ut innmaten. Dette er god basis
				for saus, så ta vare på det.
		</RecipeStep>
		<RecipeStep>
				Bind lårene sammen ved benknokene.
				Sitter vingespissene på, før dem bak
				ryggen inn mot halsen. Slik at vingene
				hviler under og støtter kalkunen.
		</RecipeStep>
		<RecipeStep>
				Ta ut innmaten. Dette er god basis for saus,
				så ta vare på det. Bind lårene sammen ved
				benknokene. Sitter vingespissene på, før
				dem bak ryggen inn mot halsen. Slik at vingene
				hviler under og støtter kalkunen.
		</RecipeStep>
		<RecipeStep>
				Bind lårene sammen ved benknokene.
				Sitter vingespissene på, før dem bak
				ryggen inn mot halsen. Slik at vingene
				hviler under og støtter kalkunen.
		</RecipeStep>
		<RecipeStep>
				Ta ut innmaten. Dette er god basis
				for saus, så ta vare på det.
				hviler under og støtter kalkunen.
		</RecipeStep>

		<Code language="jsx">
			{`import { RecipeSteps } from '@aller/shiny';

		<RecipeStep>
			Some Text
		</RecipeStep>
			`}
		</Code>
	</section>
);

