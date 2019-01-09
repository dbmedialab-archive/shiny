import styled from 'react-emotion';

const Error = styled.span`
	font-size: 1.1rem;
	color: ${p => p.theme.color.fail};
	margin: ${p => p.margin ? p.margin : '0 8px 0 8px'};
	display: inline-block;
	position: relative;

	:before, :after {
		position: absolute;
		left: -12px;
		content: ' ';
		height: 13px;
		width: 2px;
		background-color: ${p => p.theme.color.fail};
	}

	:before {
		transform: rotate(45deg);
	}

	:after {
		transform: rotate(-45deg);
	}
`

export default Error;
