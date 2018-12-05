import styled from '@emotion/styled';
import { getColor } from '../utils/get-color';

const LinkBarNav = styled.nav`
	background: ${props => (props.backgroundColor ? getColor(props.backgroundColor) : props.background)};
	position: relative;
	width: ${props => props.width};
	display: ${props => (props.isVertical ? 'inline-block' : 'block')};
	${props => (props.zIndex ? `z-index: ${props.zIndex};`: '')}
`;
LinkBarNav.defaultProps = {
	isVertical: false,
};

export { LinkBarNav };
