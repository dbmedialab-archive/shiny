import Styled from 'styled-components';

const Buttons = Styled.button`
	background: #ff790a;
	border: none;
	height: 37px;
	display: inline-block;
	border-radius: 10%;
	> span {
		color: #fff;
	}
`;

const Counter = Styled.span`
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

const Pers = Styled.span`
	font-family: Roboto;
	font-size: 18px;
	color: #333333;
	font-weight: normal;
	margin-left: 14px;
`;

const AddCart = Styled.div`
	
	> span:first-child {
		color: #ff790a;
		vertical-align: sub;
		margin-right: 10px;
		cursor: pointer;
	}
`;

const Quantity = Styled.ul`
	margin-top: 26px;
	list-style: none;
	padding: 0;
	font-size: 16px;
	& span {
   	 	width: 430px;
    	float: right;
	}
`;

export { Buttons, Counter, Pers, Quantity, AddCart };
