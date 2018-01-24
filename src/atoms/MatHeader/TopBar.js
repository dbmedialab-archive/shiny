import Styled from 'styled-components';

const TopBar = Styled.div`
	background-color: #4a4a4a;
	padding: 8px 19px;
	
	&:after {
		content: '';
		clear: both;
		display: block;
	}
`;

export { TopBar };
