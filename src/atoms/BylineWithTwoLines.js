import Styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { SvgIcon } from './SvgIcon';

const BylineBlock = Styled.div`
	display: flex;
	flex-wrap: nowrap;
`;

const BylineImage = Styled.img.attrs({
	src: ({ src }) => src,
})`
    float: left;
    width: 5.5rem;
    height: 5.5rem;
    overflow: hidden;
    border-radius: 50%;
    margin-right: ${props => props.theme.variables.horizontalBase};
    object-fit: cover;

    @media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em)  {
		width: 10rem;
    	height: 10rem;
    	margin-right: 4rem;
	}
`;

const WrapAvatar = Styled.div`
	float: left;
    width: 5.5rem;
    height: 5.5rem;
    overflow: hidden;
    border-radius: 50%;
    margin-right: ${props => props.theme.variables.horizontalBase};
    text-align: center;
    
    @media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em)  {
		width: 10rem;
    	height: 10rem;
	}
`;

const TextBlock = Styled.div`
    float: left;
    color: ${props => props.theme.colors.type};
    font-family: Roboto, Cabin, sans-serif;
`;

const Name = Styled.div`
    font-size: 1.9rem;
    line-height: 2.4rem;
    font-weight: 300;

    @media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em)  {
		font-size: 4.5rem;
		line-height: 5.5rem;
	}
`;

const Email = Styled.a.attrs({
	href: ({ email }) => `mailto:${email}`,
})`
    font-size: 1.7rem;
    line-height: 3.4rem;
    font-weight: 300;
    color: ${props => props.theme.colors.type};
    
    @media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em)  {
    	font-size: 3.5rem;
	}
`;

const BylineWithTwoLines = ({ src, name, email }) => (
	<BylineBlock>
		{ src ?  <BylineImage
			src={src}
		/> : <WrapAvatar><SvgIcon name="user" /></WrapAvatar>}
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
