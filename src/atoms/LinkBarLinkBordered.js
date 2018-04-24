import styled from 'styled-components';
import parseColor from 'parse-color';
import { LinkBarLink } from '..';

const calculateTextColor = (theme, backgroundColor=theme.colors.primary) => {
	const { r, g, b } = parseColor(backgroundColor);
	const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000; // converting to YIQ to determine brightness of background
	return (yiq >= 150) ? theme.colors.grayTintDark : theme.colors.white;
};

const LinkBarLinkBordered = styled(LinkBarLink)`

	border-radius: 0.3rem;
	border: solid 0.1rem ${props => props.theme.colors.grayTint};	
	margin: 0.25rem 0.5rem 0.25rem 0;
	&:after {
   		content: none;
	}
	
	// get rid of !important by increasing specificity of these styles
	&&{
		color: ${props => props.theme.colors.grayTintDark};
		
		//isActive state
		border-color: ${props => props.isActive && (props.activeBackground || props.theme.colors.primary)};
		background-color: ${props => props.isActive && (props.activeBackground || props.theme.colors.primary)};
		color: ${props => props.isActive && calculateTextColor(props.theme, props.activeBackground)};
		
		
		&:hover{
			border-color: ${props => props.activeBackground || props.theme.colors.primary};
			background-color: ${props => props.activeBackground || props.theme.colors.primary};
			color: ${props => calculateTextColor(props.theme, props.activeBackground)};
		};
		
		&:focus{
			border-color: ${props => props.activeBackground || props.theme.colors.primary};
			background-color: ${props => props.activeBackground || props.theme.colors.primary};
			color: ${props => calculateTextColor(props.theme, props.activeBackground)};
		};
	}
`;

LinkBarLinkBordered.defaultProps = {
	ALLCAPS: true,
};

module.exports = { LinkBarLinkBordered };
