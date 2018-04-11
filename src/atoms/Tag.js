import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

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
	color: ${props => props.theme.colors.grey};
`;
const TagAItem = TagSpanItem.withComponent('a').extend.attrs({
	href: ({ url }) => url,
})`
	&, &:active, &:visited, &:hover {
		text-decoration: none;
		color: ${props => props.theme.colors.grey};
	}
	
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		font-size: 4.5rem;
		letter-spacing: 0.4rem;
	}
`;

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
