import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { XLargeHeading as Heading } from '../..';
import { RecipeStep } from '../../atoms/MainRecipe/RecipeStep';

const RecipeStepsWrapper = styled.div`
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		//padding: 0 5rem;
	}
`;


const RecipeIngredientsHeading = Heading.extend`
	font-size: 3.8rem !important;
    
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		margin-top: 7rem;
		margin-bottom: 3rem;
    }
`;

const RecipeSteps = ({ steps }) => (
	<RecipeStepsWrapper>
		<RecipeIngredientsHeading>SLIK GJØR DU</RecipeIngredientsHeading>
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
