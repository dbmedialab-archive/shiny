import styled from '@emotion/styled';
import { getColor } from '../utils/get-color';

const Cross = styled.i`
	margin-left: 1rem;

	:before, :after {
		position: absolute;
		content: "";
		height: ${p => p.size}rem;
		width: ${p => p.layer}rem;
		background-color: ${p => getColor(p.color)};
	}
	:before {
		transform: rotate(45deg);
	}
	:after {
		transform: rotate(-45deg);
	}
`;


Cross.defaultProps = {
	size: 2.5,
	layer: 0.2,
	color: 'darkness',
};

export { Cross };
