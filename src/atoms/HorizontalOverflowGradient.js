import styled from 'react-emotion';

const HorizontalOverflowGradient = styled.div`
	background: linear-gradient(to right, rgba(255,255,255,.3) 0%, rgba(255,255,255,1) 70%);
	position: absolute;
	top: 0;
	right: 0;
	width: 3rem;
	height: calc(100% - .1rem);
`;

export { HorizontalOverflowGradient };
