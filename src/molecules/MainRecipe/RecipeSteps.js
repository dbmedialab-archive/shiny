import React from 'react';
import PropTypes from 'prop-types';

import { LargeHeading as Heading } from '../..';
import { RecipeStep } from '../../atoms/MainRecipe/RecipeStep';

const RecipeSteps = ({ steps }) => (
	<div>
		<Heading>SLIK GJØR DU</Heading>
		{steps.map((item, index) => {
			return (
				<RecipeStep
					itemProp="recipeInstructions"
					key={index}
					dangerouslySetInnerHTML={{ __html: item.description }}
				/>
			);
		})}
	</div>
);

RecipeSteps.propTypes = {
	steps: PropTypes.arrayOf(PropTypes.shape({
		description: PropTypes.string,
	})),
};
RecipeSteps.defaultProps = {
	steps: [],
};

export { RecipeSteps };
