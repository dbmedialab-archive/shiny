import styled from 'styled-components';

const FooterMat = styled.div`
	background: #515151;
	margin-top: 30px;
	padding: 50px;
	box-sizing: border-box;
	color: #fff;
	font-family: 'Cabin', sans-serif;
	border-radius: .3rem;
	overflow: hidden;
	font-size: 14px;
	& p {
		margin: 0;
		width: 185px;
		margin-left: 20px;
	}
	&.col {
		color: red;
	}
`;


export { FooterMat, };
