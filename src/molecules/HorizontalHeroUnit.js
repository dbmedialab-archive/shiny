import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Row } from '../atoms/Row';
import { Col } from '../atoms/Col';
import { LazyProgressiveImage } from './LazyProgressiveImage';
import { Source } from './Source';
import {
	UnderlinedHugeHeading,
	UnderlinedMediumHeading,
	UnderlinedSmallHeading,
} from '../atoms/UnderlinedHeading';
import { YoutubeFrame } from '../atoms/MainRecipe/youtubeFrame';

import { IconBar } from './IconBar';

const Fragment = ({ children }) => children;

const NoWrap = styled.div`
	white-space: nowrap;
`;

const TitleCol = styled(Col)`
	&& {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
	}

	padding: ${props => props.theme.variables.verticalBase} 0;
`;

const MaybePaddedRow = styled(Row)`
	padding-top:    calc( 1/2 * ${props => (props.verticalPadding ? props.theme.variables.verticalBase : '0')});
	padding-bottom: calc( 1/2 * ${props => (props.verticalPadding ? props.theme.variables.verticalBase : '0')});
`;

const formatTime = (mins) => {
	let hours = 0;
	let minutes = 0;

	if (mins) {
		hours = Math.floor(mins / 60);
		minutes = mins % 60;
	}

	return {
		humanTime: `${hours ? `${hours}t ` : ''} ${minutes ? `${minutes}min ` : ''}`,
		schemaTime: `PT${hours ? `${hours}H` : ''}${minutes ? `${minutes}M` : ''}`,
	};
};


const getIconTitle = (name, value) => {
	let propName;
	switch (name) {
	case 'aktiv':
		propName='cookTime';
		break;
	case 'totalt':
		propName='totalTime';
		break;
	default:
		break;
	}
	return (
		<Fragment>
			<NoWrap>{name}</NoWrap>
			{value.humanTime && value.schemaTime
				? <time itemProp={propName} dateTime={value.schemaTime}>{value.humanTime}</time>
				:<NoWrap>{value}</NoWrap> }
		</Fragment>
	);
};

const HeroUnit = ({
	Heading,

	difficulty,
	iconBarWidth,
	iconSize,
	image,
	textSize,
	timeCooking,
	timeTotal,
	title,
	type,
	verticalPadding,
	video,
}) => {
	const icons = [];

	difficulty && icons.push({
		name: 'difficulty',
		text: getIconTitle('nivå', difficulty[difficulty] || ''),
		value: difficulty,
	});

	timeCooking && icons.push({
		name: 'activity',
		text: getIconTitle('aktiv', formatTime(timeCooking)),
	});

	timeTotal && icons.push({
		name: 'total-time',
		text: getIconTitle('totalt', formatTime(timeTotal)),
	});
	/* eslint-disable react/no-danger */
	return (
		<MaybePaddedRow verticalPadding={verticalPadding}>
			<Col xs={12} md={7}>
				{type === 'video'
					&& (
						<YoutubeFrame>
							<iframe
								itemProp="thumbnailUrl"
								src={video.src}
								width="100%"
								frameBorder="0"
								title={video.title || 'Video'}
							/>
						</YoutubeFrame>
					)
				}
				{type === 'image'
					&& (
						<LazyProgressiveImage src={image.src} ratio={0.66} fallbackSrc={image.fallbackSrc}>
							<Source srcSet={image.placeholder} />
						</LazyProgressiveImage>
					)
				}
			</Col>
			<TitleCol xs={12} md={5}>

				{(difficulty || timeCooking || timeTotal)
				&& (
					<Row center="xs">
						<Col xs={iconBarWidth} md={4}>
							<IconBar
								entities={icons}
								textSize={textSize}
								iconSize={iconSize}
							/>
						</Col>
					</Row>
				)
				}
				<Row center="xs">
					<Col xs={iconBarWidth}>
						<Heading
							itemProp="name"
							dangerouslySetInnerHTML={{ __html: title.replace(/<\/?[^>]+>/g, '') }}
						/>

					</Col>
				</Row>
			</TitleCol>
		</MaybePaddedRow>
	);
};

HeroUnit.propTypes = {
	Heading: PropTypes.func,
	image: PropTypes.shape({
		src: PropTypes.string,
		ratio: PropTypes.number,
		fallbackSrc: PropTypes.string,
		placeholder: PropTypes.string,
	}),
	video: PropTypes.shape({
		src: PropTypes.string,
		title: PropTypes.string,
	}),
	type: PropTypes.string,
	difficulty: PropTypes.oneOf([1, 2, 3]),
	timeCooking: PropTypes.number,
	timeTotal: PropTypes.number,
	title: PropTypes.string.isRequired,
	iconBarWidth: PropTypes.number.isRequired,
	iconSize: PropTypes.number.isRequired,
	textSize: PropTypes.number.isRequired,
	verticalPadding: PropTypes.bool,
};

HeroUnit.defaultProps = {
	Heading: ({ children, ...rest }) => <h1 {...rest}>{children}</h1>,
	image: {},
	video: {},
	type: 'image',
	difficulty: null,
	timeCooking: null,
	timeTotal: null,
	verticalPadding: false,
};

const SmallHorizontalHeroUnit = props => (
	<HeroUnit
		Heading={UnderlinedSmallHeading}
		iconSize={2}
		textSize={1}
		iconBarWidth={10}
		fallbackSrc=""
		{...props}
	/>
);
const MediumHorizontalHeroUnit = props => (
	<HeroUnit
		Heading={UnderlinedMediumHeading}
		iconSize={3}
		textSize={1.3}
		iconBarWidth={9}
		fallbackSrc=""
		{...props}
	/>
);
const LargeHorizontalHeroUnit = props => (
	<HeroUnit
		Heading={UnderlinedHugeHeading}
		iconSize={6}
		textSize={1.6}
		iconBarWidth={7}
		fallbackSrc=""
		{...props}
	/>
);

export {
	SmallHorizontalHeroUnit,
	MediumHorizontalHeroUnit,
	LargeHorizontalHeroUnit,
};
