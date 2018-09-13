import styled from 'react-emotion';

const Figure = styled.figure`
	width: ${props => props.width};
	padding-bottom: ${props => props.paddingBottom};
	margin: 0;
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
