import Styled from 'styled-components';
import { hideWithFlexboxgridSyntax } from '../../utils/hide-with-flexboxgrid-syntax';

const TopBarSearchField = Styled.input`
	height: 38px;
	width: 564px;
	float: right;
	padding: 11px 15px 9px;
	font-size: 15px;

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
