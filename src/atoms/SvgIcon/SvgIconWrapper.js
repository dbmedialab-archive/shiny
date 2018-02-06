import Styled from 'styled-components';
const SvgIconWrapper = Styled.div`
	display: inline-block;
	text-align: center;
	font-size: 12px;
	width: ${props => {
		return props.size || 5
	}}rem;
`;

export default SvgIconWrapper;