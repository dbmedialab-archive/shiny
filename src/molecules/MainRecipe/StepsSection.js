import React from 'react';
import PropTypes from 'prop-types';

import { RecipeStep } from '../../atoms/MainRecipe/RecipeStep';
/* eslint-disable max-len */
const StepsSection  = ({ steps }) => (
	<div>
		<h1>SLIK GJØR DU</h1>
		{
			steps.map((item, index) => {
				return <RecipeStep key={index} dangerouslySetInnerHTML={{ __html: item.description.replace(/<\/?[^>]+>/g, '') }} />;
			})
		}
	</div>
);
/* eslint-enable max-len */

StepsSection.propTypes = {
	steps: PropTypes.arrayOf(PropTypes.shape({
		description: PropTypes.string,
	})),
};
StepsSection.defaultProps = {
	steps: [],
};


export { StepsSection };
