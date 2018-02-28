import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
	Row,
	Col,
	LazyProgressiveImage,
	Source,
	IconBar,
	UnderlinedHugeHeading,
	UnderlinedMediumHeading,
	UnderlinedSmallHeading,
} from '../..';

const Fragment = ({ children }) => children;

const NoWrap = styled.div`
	white-space: nowrap;
`;

const TitleCol = Col.extend`
	&& {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	padding: ${props => props.theme.variables.verticalBase} 0;
`;

const MaybePaddedRow = Row.extend`
	padding-top:    calc( 1/2 * ${props => (props.verticalPadding ? props.theme.variables.verticalBase : '0')});
	padding-bottom: calc( 1/2 * ${props => (props.verticalPadding ? props.theme.variables.verticalBase : '0')});
`;

const difficulty = {
	1: 'Lett',
	2: 'Middels',
	3: 'Vanskelig',
};

const formatTime = (mins) => {
	let hours = 0;
	let minutes = 0;

	if (mins) {
		hours = Math.floor(mins / 60);
		minutes = mins % 60;
	}

	return `${hours ? `${hours}t ` : ''} ${minutes ? `${minutes}min ` : ''}`;
};

const getIconTitle = (name, value) => {
	return (
		<Fragment>
			<NoWrap>{name}</NoWrap>
			<NoWrap>{value}</NoWrap>
		</Fragment>
	);
};

const HeroUnit = (props) => {
	const icons = [];
	props.difficulty && icons.push({
		name: 'difficulty',
		text: getIconTitle('nivå', difficulty[props.difficulty] || ''),
		value: props.difficulty,
	});

	props.timeCooking && icons.push({
		name: 'activity',
		text: getIconTitle('aktiv', formatTime(props.timeCooking)),
	});

	props.timeTotal && icons.push({
		name: 'total-time',
		text: getIconTitle('totalt', formatTime(props.timeTotal)),
	});

	return (
		<MaybePaddedRow verticalPadding={props.verticalPadding}>
			<Col xs={12} md={7}>
				<LazyProgressiveImage src={props.image.src} ratio={0.66} fallbackSrc={props.image.fallbackSrc} >
					<Source srcSet={props.image.placeholder} />
				</LazyProgressiveImage>
			</Col>
			<TitleCol xs={12} md={5}>
				{(props.difficulty || props.timeCooking || props.timeTotal) &&
				<Row center="xs">
					<Col xs={props.iconBarWidth}>
						<IconBar
							entities={icons}
							textSize={props.textSize}
							iconSize={props.iconSize}
						/>
					</Col>
				</Row>
				}
				<Row center="xs">
					<Col xs={props.iconBarWidth}><props.Heading>{ props.title }</props.Heading></Col>
				</Row>
			</TitleCol>
		</MaybePaddedRow>
	);
};

HeroUnit.propTypes = {
	image: PropTypes.shape({
		src: PropTypes.string.isRequired,
		ratio: PropTypes.number,
		fallbackSrc: PropTypes.string.isRequired,
		placeholder: PropTypes.string.isRequired,
	}).isRequired,
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
	difficulty: null,
	timeCooking: null,
	timeTotal: null,
	verticalPadding: false,
};

const SmallHorizontalHeroUnit = props => (<HeroUnit
	Heading={UnderlinedSmallHeading}
	iconSize={2}
	textSize={1}
	iconBarWidth={10}
	fallbackSrc=""
	{...props}
/>);
const MediumHorizontalHeroUnit = props => (<HeroUnit
	Heading={UnderlinedMediumHeading}
	iconSize={3}
	textSize={1.3}
	iconBarWidth={9}
	fallbackSrc=""
	{...props}
/>);
const LargeHorizontalHeroUnit = props => (<HeroUnit
	Heading={UnderlinedHugeHeading}
	iconSize={6}
	textSize={1.6}
	iconBarWidth={6}
	fallbackSrc=""
	{...props}
/>);

export { SmallHorizontalHeroUnit, MediumHorizontalHeroUnit, LargeHorizontalHeroUnit };
