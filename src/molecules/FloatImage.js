import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import { getColor, getVariable } from '../utils';

import { Figure } from '../atoms/Figure';
import { Image } from '../atoms/Image';

const FigCaption = styled.figcaption`
	${(props) => {
		const { border } = props;

		const grayTintLighter = getColor('grayTintLighter')(props);
		const uiSmallSize = getVariable('uiSmallSize')(props);
		const uiSmallLineHeight = getVariable('uiSmallLineHeight')(props);
		const uiWeight = getVariable('uiWeight')(props);
		const horizontalBase = getVariable('horizontalBase')(props);
		const verticalBase = getVariable('verticalBase')(props);

		return css`
			display: block;
			margin: calc(1/2 * ${verticalBase} 0;
			${border && `border-bottom: .1rem solid ${grayTintLighter};`}
			padding:
				calc(2/3 * ${verticalBase})
				calc(1/2 * ${horizontalBase})
				calc(1/3 * ${verticalBase})
			;
			max-width: 100%;
			font-size: ${uiSmallSize};
			line-height: ${uiSmallLineHeight};
			font-weight: ${uiWeight};
			z-index: 1;
		`;
	}}
`;

const FloatImage = ({
	url,
	figCaption,
	...rest
}) => {
	const figCaptionElement = (!figCaption.intro || !figCaption.text)
		? null
		: <FigCaption border><strong>{figCaption.intro}</strong> {figCaption.text}</FigCaption>;

	return (
		<Figure {...rest}>
			<Image src={url} />
			{figCaptionElement}
		</Figure>
	);
};

FloatImage.propTypes = {
	float: PropTypes.string,
	width: PropTypes.string,
	paddingBottom: PropTypes.string,
	url: PropTypes.string.isRequired,
	figCaption: PropTypes.shape({
		active: PropTypes.bool,
		intro: PropTypes.string,
		text: PropTypes.string,
	}),
};

FloatImage.defaultProps = {
	float: '',
	width: 'auto',
	paddingBottom: '0',
	figCaption: {
		active: false,
		intro: '',
		text: '',
	},
};

export { FloatImage };
