import styled from 'styled-components';

const LinkBarItem = styled.li`
	position: relative;
	flex: ${props => (props.flex ? props.flex : 'initial')};
	display: inline-block;
	vertical-align: middle;
	line-height: 0;
	margin: 0;

	&:last-child {
		margin-right: calc(2 * ${props => props.theme.variables.horizontalBase});
	}
`;

export default LinkBarItem;
