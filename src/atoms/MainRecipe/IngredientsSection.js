import Styled from 'styled-components';

const Buttons = Styled.button`
	background: #ff790a;
	border: none;
	height: 4.7rem;
	display: inline-block;
	border-radius: 10%;

	> span {
		color: #fff;
	}
	
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		height: 8.7rem;
	}
`;

const Counter = Styled.span`
	width: 5.2rem;
	display: inline-block;
	height: 5rem;
	text-align: center;
	margin: 0 1.4rem;
	vertical-align: top;
	border-radius: .2rem;
	background-color: #ffffff;
	box-shadow: inset 0 0 .2rem 0 rgba(111, 108, 108, 0.5);

	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		width: 9.1rem;
		height: 8.7rem;
		margin: 0 2.3rem;
		border-radius: .5rem;
		box-shadow: inset 0 0 .6rem 0 rgba(111, 108, 108, 0.5);
	}
	
	> span {
		color: #949494;
		font-size: 2.4rem;
		margin: .3rem .6rem;
    	display: inline-block;
		font-family: "Roboto";
    	
    	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
			font-size: 5.3rem;
			line-height: 1.6;
		}
	}
`;

const Pers = Styled.span`
	font-size: 2.4rem;
	color: #333333;
	font-weight: normal;
	margin-left: 2rem;
	letter-spacing: .0625rem;
	font-family: "Roboto";

	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		font-size: 4.8rem;
		font-weight: 300;
		margin-left: 3.4rem;
		letter-spacing: 3px;
		vertical-align: text-bottom;
	}

`;

const AddCart = Styled.div`
	> span:first-child {
		color: #ff790a;
		vertical-align: sub;
		margin-right: 1.0rem;
		cursor: pointer;
	}
	> span {
		letter-spacing: .0625rem;
		font-size: 2rem;
	}
`;

const Quantity = Styled.ul`
	margin-top: 2.6rem;
	list-style: none;
	padding: 0;
	font-size: 1.6rem;

	& span {
   	 	width: 43.0rem;
    	float: right;
	}
`;

export { Buttons, Counter, Pers, Quantity, AddCart };
