import Styled from 'styled-components';

const Buttons = Styled.button`
	background: #ff790a;
	border: none;
	height: 3.7rem;
	display: inline-block;
	border-radius: 10%;

	> span {
		color: #fff;
	}
`;

const Counter = Styled.span`
	width: 3.8rem;
	display: inline-block;
	height: 3.7rem;
	text-align: center;
	margin: 0 1.0rem;
	vertical-align: top;
	border-radius: .2rem;
	background-color: #ffffff;
	box-shadow: inset 0 0 .2rem 0 rgba(111, 108, 108, 0.5);

	> span {
		color: #949494;
		font-size: 2.4rem;
		margin: .3rem .6rem;
    display: inline-block;
	}
`;

const Pers = Styled.span`
	font-family: Roboto;
	font-size: 1.8rem;
	color: #333333;
	font-weight: normal;
	margin-left: 1.4rem;
`;

const AddCart = Styled.div`
	> span:first-child {
		color: #ff790a;
		vertical-align: sub;
		margin-right: 1.0rem;
		cursor: pointer;
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
