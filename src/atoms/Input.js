import styled, { css } from '@emotion/styled';

import { getColor, getVariable } from '../utils';

const Input = styled.input`
  border: none;
	margin: 0 0 ${getVariable('verticalBase')};
	padding: 0 0 calc(1/4 * ${getVariable('verticalBase')}) 0;
  width: ${p => (p.width ? p.width : '100%')};
	background: transparent;
  font-size: ${getVariable('uiRegularSize')};
	line-height: ${getVariable('uiRegularLineHeight')};
  border-bottom: .1rem solid ${getColor('lightGrey')};
  color: ${getColor('type')};
  font-weight: ${getVariable('uiWeight')};

	&:hover {
		transition: border 0.2s;
		border-color: ${getColor('primary')};
	}

  &:focus {
		transition: box-shadow 0.2s, border-color .2s;
    outline: none;
		border-color: ${getColor('primary')};
		box-shadow: 0 .1rem 0 ${getColor('primary')};
  }

  &::-webkit-input-placeholder {
		font-size: ${getVariable('uiSmallSize')};
		font-weight: ${getVariable('uiWeight')};
		letter-spacing: .05rem;
  }
	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus,
	&:-webkit-autofill:active {
		transition: background-color 5000s ease-in-out 0s;
	}
	${({ large }) => large && css`
		font-size: ${getVariable('uiLargeSize')};
		line-height: ${getVariable('uiLargeLineHeight')};
	`}

	${({ widget }) => widget && css`
		font-size: ${getVariable('uiSmallSize')};
		font-weight: ${getVariable('uiWeight')};
		letter-spacing: .05rem;
	`}

	${({ disabled }) => disabled && css`
		border-color: transparent;
		opacity: 0.7;
		background: transparent;

		&:hover {
			transition: none;
			border-color: transparent;
		}
	`}
`;

export default Input;
