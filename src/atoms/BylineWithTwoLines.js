import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { getColor, getVariable } from '../utils';

import { SvgIcon } from './SvgIcon';

const BylineImage = styled.img`
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

const A = styled.a`
	font-size: ${getVariable('uiSmallSize')};
	font-weight: 300;
	color: ${getColor('type')};
`;

const Email = ({ email, ...rest }) => <A href={`mailto:${email}`} {...rest} />;

Email.propTypes = {
	email: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};


const BylineWithTwoLines = ({ src, name, email }) => (
	<div>
		{ src ?  (
			<BylineImage
				src={src}
			/>
		) : <WrapAvatar><SvgIcon name="user" /></WrapAvatar>}
		<TextBlock primaryText={name}>
			<Name>
				<span>{name}</span>
			</Name>
			<Email email={email}>
				{email}
			</Email>
		</TextBlock>
	</div>
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
