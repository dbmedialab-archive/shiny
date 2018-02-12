import styled from 'styled-components';

const RecipeSteps = styled.ol`
	list-style: none;
    padding: 0;
    & li {
		counter-increment: item;
   	 	margin-bottom: ${props => props.theme.variables.headingMediumLineHeight};
  		line-height: ${props => props.theme.variables.headingMediumLineHeight};
  		position: relative;
 	}
    & li:before {
		content: counter(item);
		font-size: ${props => props.theme.variables.headingXlargeSize};
		display: inline-block;
		position: absolute;
    	left: -3.5rem;
    	top: 0.5rem;
    }
`;

export { RecipeSteps };
