import styled, { css } from "react-emotion"

import { getColor, getVariable } from '../utils';

const Toggle = styled.a`
  display: block;
	display: flex;
	align-items: center;
  cursor: pointer;
  margin-bottom: ${getVariable('verticalBase')};
	/* transition: .2s 0s all; */
	color: ${getColor('grayTint', 'light')};
	${({ toggled }) => toggled && css`
		color: ${getColor('grayTint', 'dark')};

		&:before {
			content: '–' !important; /* @TODO fixme */
			font-weight: 500 !important; /* @TODO fixme */
		}
	`}

	&:last-child {
		margin-bottom: 0;
	}

  &::before {
		content: "+";
		text-decoration: none;

		display: "block";
		color: ${getColor('primary')};
		font-weight: 400; /* @TODO fixme */
		margin-right: calc(1/2 * ${getVariable('horizontalBase')});
		font-size: 1.9rem; /* @TODO fixme */
		text-align: center;
   }

   &:hover {
		text-decoration: none !important;  /* @TODO fixme */
		color: ${getColor('grayTint', 'dark')};

		&:before {
			color: inherit;
			border-color: ${getColor('grayTint', 'dark')};
		}
  }
`

export { Toggle };
