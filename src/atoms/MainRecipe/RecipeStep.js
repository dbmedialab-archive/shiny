import styled from 'styled-components';

const RecipeStep = styled.div`
	list-style: none;
	font-family: Roboto, Cabin, sans-serif;
	counter-increment: item;
	margin-bottom: ${props => props.theme.variables.headingMediumLineHeight};
	line-height: ${props => props.theme.variables.headingMediumLineHeight};
	position: relative;
	padding: 0 0 0 5rem;

	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		line-height: 7.5rem;
    	font-size: 2.7rem;	
		margin-bottom: 2.5rem;
		padding-left: 0;
		text-indent: 1.5em;
	}
	
	> *::before {
		content: counter(item);
		font-family: Roboto, Cabin, sans-serif;
		font-size: ${props => props.theme.variables.headingHugeSize};
		line-height: ${props => props.theme.variables.headingHugeSize};
		display: inline-block;
		position: absolute;
		left: 0.05rem;
		top: 0.5rem;
			
		@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
			content: counter(item) ". ";
    		font-size: 4.2rem;
			left: -4.6rem;
			top: 2.2rem;
		}
	}
`;

export { RecipeStep };
