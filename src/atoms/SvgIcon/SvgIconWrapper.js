import styled from '@emotion/styled';

const SvgIconWrapper = styled.div`
	display: inline-block;
	text-align: center;
	width: ${props => props.size}rem;
	${props => (props['size-sm'] && `
	@media (max-width: ${props.theme.flexboxgrid.breakpoints.md}em) {
		width: ${props['size-sm']}rem;
 	}`)}
`;

export { SvgIconWrapper };
