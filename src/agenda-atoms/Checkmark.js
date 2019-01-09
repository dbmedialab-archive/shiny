import styled from 'react-emotion';

const Checkmark = styled.span`
	font-size: 1.1rem;
	color: ${p => p.theme.color.success};
	margin: ${p => p.margin ? p.margin : '0 8px 0 8px'};
	display: inline-block;
	&:before {
		display: block;
		content: "";
		float: left;
		border-bottom: 2px solid ${p => p.theme.color.success};
		border-right: 2px solid ${p => p.theme.color.success};
		height: 12px;
		width: 6px;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
		margin-top: -3px;
		margin-right: 8px;
		margin-left: 4px;
	}
`

export default Checkmark;
