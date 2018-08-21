import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { getColor, getVariable } from '../utils';

import { SvgIcon } from './SvgIcon';

const BylineBlock = styled.div``;
const BylineImage = styled.img.attrs({
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

const WrapAvatar = styled.div`
	float: left;
    width: 4.5rem;
    height: 4.5rem;
    overflow: hidden;
    border-radius: 50%;
    margin-right: ${getVariable('horizontalBase')};
    text-align: center;
`;

const TextBlock = styled.div`
    float: left;
    color: ${getColor('type')};
    font-family: ${getVariable('mainFont')};
`;

const Name = styled.div`
    font-size: ${getVariable('uiRegularSize')};
    line-height: ${getVariable('uiRegularLineHeight')};
    font-weight: 300;
`;

const Email = styled.a.attrs({
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
