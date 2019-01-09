import styled from "react-emotion"

const PostTime = styled.time`
	display: inline-block;
	vertical-align: top;
	color: ${p => p.theme.color.darkGrey};
	font-weight: 400;
	font-size: 1.2rem;
	text-align: left;
	text-transform: uppercase;
	letter-spacing: .5px;
	float: left;
`;

export default PostTime;
