import styled from '@emotion/styled';
import { getColor } from '../utils';

const Arrow = styled.i`
	border: solid ${p => getColor(p.color)};
	border-width: 0 ${p => p.layer}rem ${p => p.layer}rem 0;
	display: inline-block;
	padding: ${p => p.size}rem;
	${p => p.direction === 'right' && 'transform: rotate(-45deg);'}
	${p => p.direction === 'left' && 'transform: rotate(135deg);'}
	${p => p.direction === 'up' && 'transform: rotate(-135deg);'}
	${p => p.direction === 'down' && 'transform: rotate(45deg);'}
	box-shadow: 0.1rem 0.1rem rgba(0,0,0,0.3);
`;

Arrow.defaultProps = {
	direction: 'right',
	size: 0.65,
	layer: 0.15,
	color: 'type',
};

export { Arrow };
