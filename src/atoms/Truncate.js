import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

export const Truncate = styled.span`
	height: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: ${({ maxWidth }) => maxWidth};
	${({ custom }) => custom.map(({ screenWidth, maxWidth }) => css`
		@media screen and (max-width: ${screenWidth}) {
			max-width: ${maxWidth};
		}
	`)}
`;

Truncate.propTypes = {
	maxWidth: PropTypes.string,
	custom: PropTypes.arrayOf(PropTypes.shape({ screenWidth: PropTypes.string, maxWidth: PropTypes.string })),
};

Truncate.defaultProps = {
	maxWidth: '20rem',
	custom: [],
};
