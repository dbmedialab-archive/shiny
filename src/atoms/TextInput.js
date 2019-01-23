import styled, { css } from '@emotion/styled';
import PropTypes from 'prop-types';

import { getColor, getVariable } from '../utils';

const TextInput = styled.input`
	${(props) => {
		const { disabled, size, width } = props;
		const horizontalBase = getVariable('horizontalBase')(props);
		const verticalBase = getVariable('verticalBase')(props);

		const uiLargeSize = getVariable('uiLargeSize')(props);
		const uiLargeLineHeight = getVariable('uiLargeLineHeight')(props);
		const uiRegularSize = getVariable('uiRegularSize')(props);
		const uiRegularLineHeight = getVariable('uiRegularLineHeight')(props);
		const uiSmallSize = getVariable('uiSmallSize')(props);
		const uiSmallLineHeight = getVariable('uiSmallLineHeight')(props);
		const uiTinySize = getVariable('uiTinySize')(props);
		const uiTinyLineHeight = getVariable('uiTinyLineHeight')(props);

		const uiWeight = getVariable('uiWeight')(props);

		const lightGrey = getColor('calmBorder')(props);
		const primary = getColor('primary')(props);
		const type = getColor('type')(props);

		return `
		  border: none;
			margin: 0 0 ${verticalBase};
			padding: calc(1/4 * ${verticalBase}) calc(1/4 * ${horizontalBase});
		  width: ${width ? width : '100%'};
			background: transparent;
		  font-size: ${uiRegularSize};
			line-height: ${uiRegularLineHeight};
		  border-bottom: .1rem solid ${lightGrey};
		  color: ${type};
		  font-weight: ${uiWeight};

			&:hover {
				transition: border 0.2s;
				border-color: ${primary};
			}

		  &:focus {
				transition: box-shadow 0.2s, border-color .2s;
		    outline: none;
				border-color: ${primary};
				box-shadow: 0 .1rem 0 ${primary};
		  }

		  &::-webkit-input-placeholder {
				font-size: ${uiSmallSize};
				font-weight: ${uiWeight};
				letter-spacing: .05rem;
		  }
			&:-webkit-autofill,
			&:-webkit-autofill:hover,
			&:-webkit-autofill:focus,
			&:-webkit-autofill:active {
				transition: background-color 5000s ease-in-out 0s;
			}

			${size === 'large' ? `
				font-size: ${uiLargeSize};
				line-height: ${uiLargeLineHeight};

		  	&::-webkit-input-placeholder {
					font-size: ${uiRegularSize};
				}
			` : ''}

			${size === 'small' ? `
				font-size: ${uiSmallSize};
				line-height: ${uiSmallLineHeight};

		  	&::-webkit-input-placeholder {
					font-size: ${uiTinySize};
				}
			` : ''}

			${size === 'tiny' ? `
				font-size: ${uiTinySize};
				line-height: ${uiTinyLineHeight};

		  	&::-webkit-input-placeholder {
					font-size: ${uiTinySize};
				}
			` : ''}

			${disabled && `
				border-color: transparent;
				opacity: 0.7;
				background: transparent;

				&:hover {
					transition: none;
					border-color: transparent;
				}
			`}
	`;
	}}
`;

TextInput.propTypes = {
	size: PropTypes.oneOf(['tiny', 'small', '', 'large']),
	disabled: PropTypes.bool,
};
TextInput.defaultProps = {
	size: '',
	disabled: false,
};

export { TextInput };
