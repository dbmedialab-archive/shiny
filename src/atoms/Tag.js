import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const TagItem = styled.a.attrs({
	href: ({ url }) => url,
})`
	font-family: Cabin;
	font-size: ${props => props.theme.variables.headingSmallSize};
	font-weight: 500;
	font-style: normal;
	font-stretch: normal;
	line-height: normal;
	letter-spacing: 0.05rem;
	text-align: center;
	text-transform: uppercase;
	&, &:active, &:visited, &:hover {
		text-decoration: none;
		color: ${props => props.theme.colors.grey};
	}
	
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}rem) {
		font-size: 4.5rem;
		letter-spacing: 0.4rem;
	}
`;

const Tag = ({ url, title }) => <TagItem url={url}>{title}</TagItem>;

Tag.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string,
};
Tag.defaultProps = {
	title: '',
	url: '#',
};
export { Tag };
