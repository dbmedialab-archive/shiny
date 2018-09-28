import styled from 'react-emotion';
import { Grid as LibGrid } from './Grid';

// This should also fit wallpapers and topbanners.

const NoPaddingGrid = styled(LibGrid)`
	padding-left: 0!important;
	padding-right: 0!important;
	overflow-x: hidden;
`;

export { NoPaddingGrid };
