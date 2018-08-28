import styled from 'react-emotion';

import { getColor } from '../utils';

const PublishedDate = styled.span`
	display: ${props => (props.hide && 'none') || 'inline-block'};
	color: ${props => getColor(props.color)};
	font-size: 1.1rem;
	letter-spacing: 0.1em;
	text-transform: uppercase;
`;

PublishedDate.defaultProps = {
	color: 'typeLight',
};

export { PublishedDate };
