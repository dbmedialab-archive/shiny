import styled from 'react-emotion';

const LinkBarNav = styled.nav`
	background: ${props => props.background};
	position: relative;
	width: ${props => props.width};
	display: ${props => (props.isVertical ? 'inline-block' : 'block')};
	${props => (props.zIndex ? `z-index: ${props.zIndex};`: '')}
`;
LinkBarNav.defaultProps = {
	isVertical: false,
};

export { LinkBarNav };
