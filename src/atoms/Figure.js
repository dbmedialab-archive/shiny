import styled from 'react-emotion';

const Figure = styled.figure`
	margin: 0;
	padding-bottom: ${props => props.paddingBottom};
	width: ${props => props.width};
	position: relative;
	overflow: visible;

	${props => props.float && `
		float: ${props.float};
	`}

	${props => props.float === 'left' && `
		margin-right: ${props => props.theme.variables.horizontalBase};
	`}

	${props => props.float === 'right' && `
		margin-left: ${props => props.theme.variables.horizontalBase};
	`}
`;

Figure.defaultProps = {
	width: 'auto',
	paddingBottom: '0',
};

export { Figure };
