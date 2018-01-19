import styled from 'styled-components';

const LinkBarNav = styled.nav`
	background: ${props => props.background};
	position: relative;
	width: ${props => props.width};
	display: ${props => (props.isVertical ? 'inline-block' : 'block')}
`;
LinkBarNav.defaultProps = {
	isVertical: false,
};

export { LinkBarNav };
