import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LargeHeading as Heading } from '../..';
import { RecipeStep } from '../../atoms/MainRecipe/RecipeStep';

const RecipeStepsWrapper = styled.div`
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}rem) {
		//padding: 0 5rem;
	}
`;
const RecipeSteps = ({ steps }) => (
	<RecipeStepsWrapper>
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
	</RecipeStepsWrapper>
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
