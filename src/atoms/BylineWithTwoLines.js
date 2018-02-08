import Styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const BylineBlock = Styled.div`
`;
const BylineImage = Styled.img.attrs({
	src: ({ src }) => src,
})`
    float: left;
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 999px;
    margin-right: 10px;
`;

const TextBlock = Styled.div`
    float: left;
    color: ${props => props.theme.colors.type};
    font-family: 'Roboto';
`;

const Name = Styled.div`
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 300;
`;

const Email = Styled.a.attrs({
	href: ({ email }) => `mailto:${email}`,
})`
    font-size: 1.4rem;
    font-weight: 300;
    color: ${props => props.theme.colors.type};
    &:hover
`;

const BylineWithTwoLines = ({ src, name, email }) => (
	<BylineBlock>
		<BylineImage
			src={src}
		/>
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
