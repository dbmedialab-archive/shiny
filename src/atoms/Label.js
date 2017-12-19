import styled from 'styled-components';

const Label = styled.span`
	background-color: ${props => props.theme.colors[props.color] || props.theme.colors.primary};
	color: #333;
	display: inline-block;
	font-family: 'Roboto', 'Helvetica', Helvetica, Arial, sans-serif;
	/* font-size: 0.6875rem; */
	font-size: 1.1rem;
	font-weight: 300;
	letter-spacing: 1px;
	line-height: 1;
	margin-bottom: auto;
	margin-right: 1px;
	padding: 0.25rem 0.5rem 0.25rem;
	position: relative;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	white-space: nowrap;
`;

Label.defaultProps = {
	color: 'primary',
};

export { Label };
