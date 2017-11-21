import styled from 'styled-components';

const PublishedDate = styled.span`
	display: ${props => (props.hide && 'none') || 'inline-block'};
	color: ${props => props.theme.colors[props.color] || props.theme.colors.typeLight};
	font-size: 1.1rem;
	letter-spacing: 0.1em;
	text-transform: uppercase;
`;

PublishedDate.defaultProps = {
	colors: 'typeLight',
};

export default PublishedDate;
