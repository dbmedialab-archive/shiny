import styled from 'styled-components';

const PlussLabel = styled.i`
	width: 7rem;
	height: 2rem;
	background-color: #FFFFFF;
	display: inline-block;
	font-style: normal;
	vertical-align: middle;
	color: #2D2D2D;
	position: ${p => (p.absolute ? 'absolute' : 'relative')};
	top: ${p => p.top};
	left: ${p => p.left};

	:after {
		content: 'pluss';
		text-transform: uppercase;
		font-weight: 600;
		letter-spacing: 0.2rem;
		line-height: 0;
		font-size: 1.2rem;
		position: absolute;
		bottom: 50%;
		left: 28%;
	}

	:before {
		content: '+';
		font-family: Arial, sans-serif;
		line-height: 0;
		font-size: 2.2rem;
		position: absolute;
		bottom: 50%;
		left: 5%;
	}
`;

export { PlussLabel };
