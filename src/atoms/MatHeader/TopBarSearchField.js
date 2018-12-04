import styled from '@emotion/styled';
import { hideWithFlexboxgridSyntax } from '../../utils/hide-with-flexboxgrid-syntax';

const TopBarSearchField = styled.input`
	height: 3.8rem;
	width: 56.4rem;
	float: right;
	padding: 1.1rem 1.5rem .9rem;
	font-size: 1.5rem;

	&::placeholder {
		color: gray;
	}

	${hideWithFlexboxgridSyntax('block')}
`;
TopBarSearchField.defaultProps = {
	xs: null,
	sm: null,
	md: null,
	lg: null,
};

export { TopBarSearchField };
