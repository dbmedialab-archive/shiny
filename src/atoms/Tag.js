import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

import { getColor } from '../utils';

const TagSpanItem = styled.span`
	font-family: Cabin;
	font-size: ${props => props.theme.variables.headingSmallSize};
	font-weight: 500;
	font-style: normal;
	font-stretch: normal;
	line-height: normal;
	letter-spacing: 0.05rem;
	text-align: center;
	text-transform: uppercase;
	color: ${getColor('grey')};
`;

const TagA = styled(TagSpanItem.withComponent('a'))`
	&, &:active, &:visited, &:hover {
		text-decoration: none;
		color: ${getColor('grey')};
	}
`;

const TagAItem = ({ url, ...rest }) => <TagA href={url} {...rest} />;
TagAItem.propTypes = {
	url: PropTypes.string,
};
TagAItem.defaultProps = {
	url: '#',
};

const Tag = ({ url, title }) => (
	<React.Fragment>
		{url
			?<TagAItem url={url}>{title}</TagAItem>
			:<TagSpanItem>{title}</TagSpanItem>}

	</React.Fragment>);

Tag.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string,
};
Tag.defaultProps = {
	url: null,
};
export { Tag };
