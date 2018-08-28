import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { getColor, getVariable } from '../utils';

import { SvgIcon } from './SvgIcon';

const BylineBlock = styled.div``;


const BylineImage = (props) => {
	// eslint-disable-next-line jsx-a11y/alt-text
	return <img {...props} />;
};

const StyledBylineImage = styled(BylineImage)`
    float: left;
    width: 4.5rem;
    height: 4.5rem;
    overflow: hidden;
    border-radius: 50%;
    object-fit: cover;
    margin-right: ${props => getVariable('horizontalBase')(props)};
`;

const WrapAvatar = styled.div`
	float: left;
    width: 4.5rem;
    height: 4.5rem;
    overflow: hidden;
    border-radius: 50%;
    margin-right: ${props => getVariable('horizontalBase')(props)};
    text-align: center;
`;

const TextBlock = styled.div`
    float: left;
    color: ${props => getColor('type')(props)};
    font-family: ${props => getVariable('mainFont')(props)};
`;

const Name = styled.div`
    font-size: ${props => getVariable('uiRegularSize')(props)};
    line-height: ${props => getVariable('uiRegularLineHeight')(props)};
    font-weight: 300;
`;

const Email = ({ email, children }) => <a href={`mailto:${email}`}>{children}</a>;

Email.propTypes = {
	email: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

const StyledEmail = styled(Email)`
    font-size: ${props => getVariable('uiSmallSize')(props)};
    font-weight: 300;
    color: ${props => getColor('type')(props)};
`;

const BylineWithTwoLines = ({ src, name, email }) => (
	<BylineBlock>
		{ src ?  (
			<StyledBylineImage
				src={src}
			/>
		) : <WrapAvatar><SvgIcon name="user" /></WrapAvatar>}
		<TextBlock primaryText={name}>
			<Name itemProp="author" itemScope itemType="http://schema.org/Person">
				<span itemProp="name">{name}</span>
			</Name>
			<StyledEmail email={email}>
				{email}
			</StyledEmail>
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
