import styled from 'styled-components';
import { Grid as LibGrid } from 'react-styled-flexboxgrid';

// This should also fit wallpapers and topbanners.

const NoPaddingGrid = styled(LibGrid)`
	padding-left: 0!important;
	padding-right: 0!important;
	overflow-x: hidden;
`;

export { NoPaddingGrid };
