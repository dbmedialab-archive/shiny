import Styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
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
    margin-right: ${props => props.theme.variables.horizontalBase};
`;

const WrapAvatar = Styled.div`
	float: left;
    width: 4.5rem;
    height: 4.5rem;
    overflow: hidden;
    border-radius: 50%;
    margin-right: ${props => props.theme.variables.horizontalBase};
    text-align: center;
`;

const TextBlock = Styled.div`
    float: left;
    color: ${props => props.theme.colors.type};
    font-family: ${props => props.theme.variables.mainFont};
`;

const Name = Styled.div`
    font-size: ${props => props.theme.variables.uiRegularSize};
    line-height: ${props => props.theme.variables.uiRegularLineHeight};
    font-weight: 300;
`;

const Email = Styled.a.attrs({
	href: ({ email }) => `mailto:${email}`,
})`
    font-size: ${props => props.theme.variables.uiSmallSize};
    font-weight: 300;
    color: ${props => props.theme.colors.type};
`;

const BylineWithTwoLines = ({ src, name, email }) => (
	<BylineBlock>
		{ src ?  <BylineImage
			src={src}
		/> : <WrapAvatar><SvgIcon name="user" /></WrapAvatar>}
		<TextBlock primaryText={name}>
			<Name>
				{name}
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
