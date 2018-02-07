import Styled from 'styled-components';

const TopBarSearchField = Styled.input`
	height: 38px;
	width: 564px;
	float: right;
	padding: 11px 15px 9px;
	font-size: 15px;
	
	&::placeholder {
		color: gray;
	}
`;

export { TopBarSearchField };
