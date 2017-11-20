import styled from 'styled-components';

const PublishedDate = styled.span`
	display: ${props => (props.hide && 'none') || 'inline-block'};
	font-size: 0.7rem;
	letter-spacing: 0.1em;
	text-transform: uppercase;
`;

export default PublishedDate;
