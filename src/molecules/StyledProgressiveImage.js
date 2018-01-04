import styled from 'styled-components';
import ProgressiveImage from 'react-progressive-bg-image';


const StyledProgressiveImage = styled(ProgressiveImage)`
		display: block;
		max-width: none;
		padding: 0;
		height: ${props => props.height || 'auto'};
		width: ${props => props.width || '100%'};
`;

export { StyledProgressiveImage };
