import Styled from 'styled-components';

const ComplexitySectionHeader = Styled.div`
	text-align: center;
	position: relative;
	font-size: 38px;
	font-weight: 600;
	
	&:before {
		content: '';
		display: block;
		position: absolute;
		width: 50%;
		left: 25%;
		bottom: 0;
		border-bottom: 1px solid #ff790a;
	}
`;

export { ComplexitySectionHeader };
