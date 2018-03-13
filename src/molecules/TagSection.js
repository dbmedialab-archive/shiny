import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import { FontIcon } from '../..';
import { Tag } from '../atoms/Tag';

const TagItemWrapper = styled.span`
	margin-right: ${props => props.theme.variables.horizontalBase};
	float: left;
	line-height: ${props => `calc(2 * ${props.theme.variables.headingSmallLineHeight})`};
	border: 1px solid grey;
	text-align: center;
	border-radius: 5px;
	white-space: nowrap;
	font-size: 1.4rem;
	display: inline-block;

	&:last-child {
		margin-right: 0;
	}
`;

const SliderWrapper = styled.div`
	height: 6rem;
	width: 100%;
	margin: 0 auto;
	overflow: hidden;
	position: relative;
`;

const SliderViewScope = styled.div`
	width: 95%;
	height: 6rem;
	overflow: hidden;
	margin: 0 auto;
`;

const LeftArrow = styled(FontIcon)`
	position: absolute;
	color: #ff790a;
	top: 1.3rem;
	left: 0;
`;

const RightArrow = styled(FontIcon)`
	color: #ff790a;
	position: absolute;
	top: 1.3rem;
	right: 0;
`;

const TagSection = (props) => {
	const sliderSettings = {
		slidesToShow: 7,
		infinite: false,
		prevArrow: <LeftArrow name="arrow-alt-left" />,
		nextArrow: <RightArrow name="arrow-alt-right" />,
	};

	return (
		<SliderWrapper>
			<SliderViewScope>
				<Slider {...sliderSettings}>
					{
						props.tags.map((tag) => {
							return (
								<TagItemWrapper key={tag.title} >
									<Tag {...tag} />
								</TagItemWrapper>
							);
						})
					}
				</Slider>
			</SliderViewScope>
		</SliderWrapper>
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
