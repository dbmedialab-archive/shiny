import styled from 'styled-components';

const FigCaption = styled.figcaption`
	font-size: ${props => props.theme.variables.uiRegularSize};
	line-height: ${props => props.theme.variables.uiRegularLineHeight};
	margin-bottom: ${props => props.theme.variables.verticalBase};
`;

export { FigCaption };
