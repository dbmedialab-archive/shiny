import styled from 'styled-components';

const FooterMat = styled.div`
	background: #515151;
	padding: 0;
	position: relative;
	box-sizing: border-box;
	color: #fff;
	font-family: 'Cabin', sans-serif;
	border-radius: .3rem;
	overflow: hidden;
	margin-bottom: ${props => props.theme.variables.verticalBase};
	font-size: 14px;
`;


export { FooterMat, };
