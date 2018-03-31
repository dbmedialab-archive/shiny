import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tag } from '../atoms/Tag';

const TagItemWrapper = styled.span`
	margin-right: ${props => `calc(3 * ${props.theme.variables.horizontalBase})`};
	float: left;
	line-height: ${props => `calc(2 * ${props.theme.variables.headingSmallLineHeight})`};
	&:last-child {
		margin-right: 0;
	}
	
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}rem) {
		margin-right: 10rem;
		line-height: 10rem;
	}
`;
const TagSection = (props) => {
	return (
		props.tags.map((tag) => {
			return (
				<TagItemWrapper key={tag.title} >
					<Tag {...tag} />
				</TagItemWrapper>);
		})
	);
};

TagSection.propTypes = {
	tags: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		url: PropTypes.string,
	})),
};
TagSection.defaultProps = {
	tags: [],
};

export { TagSection };
