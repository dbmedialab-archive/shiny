import React from 'react';

import { Code } from '../../src/atoms/Code';
import { RecipeSteps } from '../../src/atoms/MainRecipe/StepsSection';

export default () => (
	<section>
		<RecipeSteps>
			<li>
				Ta ut innmaten. Dette er god basis
				for saus, så ta vare på det.
			</li>
			<li>
				Bind lårene sammen ved benknokene.
				Sitter vingespissene på, før dem bak
				ryggen inn mot halsen. Slik at vingene
				hviler under og støtter kalkunen.
			</li>
			<li>
				Ta ut innmaten. Dette er god basis for saus,
				så ta vare på det. Bind lårene sammen ved
				benknokene. Sitter vingespissene på, før
				dem bak ryggen inn mot halsen. Slik at vingene
				hviler under og støtter kalkunen.
			</li>
			<li>
				Bind lårene sammen ved benknokene.
				Sitter vingespissene på, før dem bak
				ryggen inn mot halsen. Slik at vingene
				hviler under og støtter kalkunen.
			</li>
			<li>
				Ta ut innmaten. Dette er god basis
				for saus, så ta vare på det.
				hviler under og støtter kalkunen.
			</li>
		</RecipeSteps>
		<Code language="jsx">
			{`import { RecipeSteps } from '@aller/shiny';

		<RecipeSteps>
			<li>Some Text</li>
		</RecipeSteps>
			`}
		</Code>
	</section>
);

