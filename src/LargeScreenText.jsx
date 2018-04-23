import styled from 'styled-components';
import { smallUp } from './utils/media-queries';

const LargeScreenText = styled.span`
	display: none;

	@media ${smallUp} {
		display: inline;
	}
`;

export default LargeScreenText;
