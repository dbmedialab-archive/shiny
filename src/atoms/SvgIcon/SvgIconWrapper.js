import styled from '@emotion/styled';

const SvgIconWrapper = styled.div`
	display: inline-block;
	text-align: center;
	width: ${(props) => {
		const { size } = props;
		return typeof props.size === 'function' ? size : String(size).concat('rem');
	}};
	${props => (props['size-sm'] && `
	@media (max-width: ${props.theme.flexboxgrid.breakpoints.md}em) {
		width: ${props['size-sm']}rem;
 	}`)}
`;

export { SvgIconWrapper };
