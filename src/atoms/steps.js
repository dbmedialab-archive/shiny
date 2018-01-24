import styled from 'styled-components';

const Buttons = styled.button`
	background: #ff790a;
	border: none;
	height: 37px;
	display: inline-block;
	border-radius: 10%;
	> span {
		color: #fff;
	}
`;

const Counter = styled.span`
	width: 38px;
	display: inline-block;
	height: 37px;
	
	margin: 0 10px;
	vertical-align: top;
	border-radius: 2px;
	background-color: #ffffff;
	box-shadow: inset 0 0 2px 0 rgba(111, 108, 108, 0.5);
	> span {
		color: #949494;
		font-size: 24px;
		margin: 3px 6px;
    	display: inline-block;
	}
`;

const Pers = styled.span`
	font-family: Roboto;
	font-size: 18px;
	color: #333333;
	font-weight: normal;
	margin-left: 14px;
`;

const RecipeSteps = styled.ol`
	list-style: none;
    padding: 0;
    & li {
		counter-increment: item;
   		font-size: 16px;
    	margin-bottom: 5px;
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

export { Buttons, Counter, Pers, RecipeSteps };
