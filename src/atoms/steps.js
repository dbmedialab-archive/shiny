import styled from 'styled-components';

const RecipeSteps = styled.ol`
	list-style: none;
    padding: 0;
    & li {
		counter-increment: item;
   		font-size: 16px;
    	display: inline-block;
   	 	margin-bottom: 30px;
  		line-height: 1.63;
  		position: relative;
 	}
    & li:before {
		content: counter(item);
		font-size: 36px;
		display: inline-block;
		position: absolute;
    	left: -45px;
    	top: -10px;
    }
`;

export {
	RecipeSteps,
};
