import Styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { getColor, getVariable } from '../utils';

import { SvgIcon } from './SvgIcon';

const BylineBlock = Styled.div`
`;
const BylineImage = Styled.img.attrs({
	src: ({ src }) => src,
})`
    float: left;
    width: 4.5rem;
    height: 4.5rem;
    overflow: hidden;
    border-radius: 50%;
    object-fit: cover;
    margin-right: ${getVariable('horizontalBase')};
`;

const WrapAvatar = Styled.div`
	float: left;
    width: 4.5rem;
    height: 4.5rem;
    overflow: hidden;
    border-radius: 50%;
    margin-right: ${getVariable('horizontalBase')};
    text-align: center;
`;

const TextBlock = Styled.div`
    float: left;
    color: ${getColor('type')};
    font-family: ${getVariable('mainFont')};
`;

const Name = Styled.div`
    font-size: ${getVariable('uiRegularSize')};
    line-height: ${getVariable('uiRegularLineHeight')};
    font-weight: 300;
`;

const Email = Styled.a.attrs({
	href: ({ email }) => `mailto:${email}`,
})`
    font-size: ${getVariable('uiSmallSize')};
    font-weight: 300;
    color: ${getColor('type')};
`;

const BylineWithTwoLines = ({ src, name, email }) => (
	<BylineBlock>
		{ src ?  (
			<BylineImage
				src={src}
			/>
		) : <WrapAvatar><SvgIcon name="user" /></WrapAvatar>}
		<TextBlock primaryText={name}>
			<Name itemProp="author" itemScope itemType="http://schema.org/Person">
				<span itemProp="name">{name}</span>
			</Name>
			<Email email={email}>
				{email}
			</Email>
		</TextBlock>
	</BylineBlock>
);

BylineWithTwoLines.propTypes = {
	src: PropTypes.string,
	name: PropTypes.string,
	email: PropTypes.string,
};
BylineWithTwoLines.defaultProps = {
	src: '',
	name: '',
	email: '',
};

export { BylineWithTwoLines };
