import styled from 'styled-components';

import Grid from './Grid';

/**
 * Grid to match the widths of banners (980px) and wallpapers (1000px)
 */
const AdConstrainedGrid = styled(Grid)`
	max-width: 100.0rem;
	padding: calc(2.0rem - 1/2 * ${props => props.theme.variables.horizontalBase});
`;

export default AdConstrainedGrid;
