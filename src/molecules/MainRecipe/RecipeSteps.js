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


const RecipeStepsHeading = Heading.extend`
	font-size: 3.8rem !important;
    padding-bottom: 4.8rem;
    
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		margin-top: 7rem;
		margin-bottom: 3rem;
		padding-bottom: 2rem;	
		font-size: 5.8rem !important;
    }
`;

const RecipeSteps = ({ steps }) => (
	<RecipeStepsWrapper>
		<RecipeStepsHeading>SLIK GJØR DU</RecipeStepsHeading>
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
