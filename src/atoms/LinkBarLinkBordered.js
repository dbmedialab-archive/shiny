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
	color: ${props => props.theme.colors.grayTintDark} !important;
	margin: 0 0.5rem 0.5rem;
	&:after {
   		content: none;
	}
		
	${props => (
		props.isActive && `
			border-color: ${props.activeBackground || props.theme.colors.primary};
			background-color: ${props.activeBackground || props.theme.colors.primary};
			color: ${calculateTextColor(props.theme, props.activeBackground)} !important;
		`
	)}
	
	&:hover{
		border-color: ${props => props.activeBackground || props.theme.colors.primary};
		background-color: ${props => props.activeBackground || props.theme.colors.primary};
		color: ${props => calculateTextColor(props.theme, props.activeBackground)} !important;
	};
	
	&:focus{
		border-color: ${props => props.activeBackground || props.theme.colors.primary} !important;
		background-color: ${props => props.activeBackground || props.theme.colors.primary} !important;
		color: ${props => calculateTextColor(props.theme, props.activeBackground)} !important;
	};
`;

LinkBarLinkBordered.defaultProps = {
	uppercase: true,
};

module.exports = { LinkBarLinkBordered };
