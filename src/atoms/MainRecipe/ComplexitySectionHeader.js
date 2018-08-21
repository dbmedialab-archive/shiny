import styled from 'styled-components';

const ComplexitySectionHeader = styled.div`
	text-align: center;
	position: relative;
	font-size: 3.8rem;
	font-weight: 600;

	&:before {
		content: '';
		display: block;
		position: absolute;
		width: 50%;
		left: 25%;
		bottom: 0;
		border-bottom: .2rem solid #ff790a;
	}
`;

export { ComplexitySectionHeader };
