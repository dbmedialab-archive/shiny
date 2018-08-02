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
 	
 	${props => props.color && `
		svg{
			path {
				fill: ${getColor(props.color)(props)};
			}
			stroke: ${getColor(props.color)(props)}
		}
 	`}
`;

export { SvgIconWrapper };
