import styled from 'styled-components';

import { LinkBarHeading } from './LinkBarHeading';

const ScrollArrow = styled(LinkBarHeading)`
	font-weight: 800;
	padding-left: ${props => (props.pointTo === 'left'
		? `calc(1/4 * ${props.theme.variables.horizontalBase})`
		: `calc(1/2 * ${props.theme.variables.horizontalBase})`
	)};
	padding-right: ${props => (props.pointTo === 'left'
		? `calc(1/2 * ${props.theme.variables.horizontalBase})`
		: `calc(1/4 * ${props.theme.variables.horizontalBase})`
	)};
`;

export { ScrollArrow };
