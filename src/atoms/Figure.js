import styled from 'styled-components';

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
		margin-right: 1.5rem;
	`}

	${props => props.float === 'right' && `
		margin-left: 1.5rem;
	`}
`;

Figure.defaultProps = {
	width: 'auto',
	paddingBottom: '0',
};

export default Figure;
