import Styled from 'styled-components';
import { getColor } from '../../utils';

const SvgIconWrapper = Styled.div`
	display: inline-block;
	text-align: center;
	width: ${props => props.size}rem;
	
	${props => (props['size-sm'] && `
	@media (max-width: ${props.theme.flexboxgrid.breakpoints.md}em) {
		width: ${props['size-sm']}rem;
 	}`)}
 	
 	svg{
		path {
			fill: ${props => getColor(props.color)};
		}
		stroke: ${props => getColor(props.color)}
 	}
`;

export { SvgIconWrapper };
