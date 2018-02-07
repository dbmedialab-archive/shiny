import Styled from 'styled-components';

const SvgIconWrapper = Styled.div`
	display: inline-block;
	text-align: center;
	width: ${(props) => {
		return props.size || 5;
	}}rem;
`;

export default SvgIconWrapper;
