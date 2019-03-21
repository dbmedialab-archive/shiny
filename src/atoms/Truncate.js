import styled from '@emotion/styled';
import { getVariable } from '../utils/get-variable';

export const Truncate = styled.span`
	height: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: calc(${getVariable('horizontalBase')} * 15);
	@media screen and (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}rem) {
		max-width: calc(${getVariable('horizontalBase')} * 10);
	}
	@media screen and (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.xs}rem) {
		max-width: calc(${getVariable('horizontalBase')} * 5);
	}
`;
