import styled from 'styled-components';

const Dropdown = styled.select`
	display: flex;
	align-items: center;
	background-color: ${props => props.theme.colors.grayTintLight};
	padding: calc(${props => props.theme.verticalBase}/4) ${props => props.theme.horizontalBase};
	border-radius: calc(2/3*${props => props.theme.verticalBase});
	border: 0;
	z-index: 1;
	cursor: pointer;
	position: relative;
	font-size: ${props => props.theme.uiRegularSize};
	line-height: ${props => props.theme.uiRegularLineHeight};
	font-family: inherit;
`;

export default Dropdown;
