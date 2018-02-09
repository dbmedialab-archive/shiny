import React from 'react';
import PropTypes from 'prop-types';
import Styled, { withTheme } from 'styled-components';

import {
	Row,
	Col,
	LazyProgressiveImage,
	Source,
	IconBar,
	UnderlinedLargeHeading,
	UnderlinedMediumHeading,
	UnderlinedSmallHeading,
} from '../..';

const LineWithoutBreak = Styled.div`
	white-space: nowrap;
`;

const PaddedCol = withTheme(Styled(Col)`
	padding: ${props => props.theme.variables.verticalBase} 0;
`);

const difficulty = {
	1: 'easy',
	2: 'middle',
	3: 'hard',
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
		<React.Fragment>
			<LineWithoutBreak>{name}</LineWithoutBreak>
			<LineWithoutBreak>{value}</LineWithoutBreak>
		</React.Fragment>
	);
};

const createHeroUnit = (size) => {
	let Heading;
	let iconSize;
	let textSize;
	let iconBarWidth;

	switch (size) {
	case 'sm':
		Heading = UnderlinedSmallHeading;
		iconSize = 2;
		textSize = 1;
		iconBarWidth = 10;
		break;
	case 'md':
		Heading = UnderlinedMediumHeading;
		iconSize = 3;
		textSize = 1.3;
		iconBarWidth = 9;
		break;
	case 'lg':
		Heading = UnderlinedLargeHeading;
		iconSize = 5;
		textSize = 1.6;
		iconBarWidth = 9;
		break;
	default:
		break;
	}

	const HeroUnit = (props) => {
		return (
			<Row>
				<Col xs={8}>
					<LazyProgressiveImage src={props.image.src} ratio={0.66} fallbackSrc={props.image.fallbackSrc} >
						<Source srcSet={props.image.placeholder} />
					</LazyProgressiveImage>
				</Col>
				<Col xs={4}>
					<Row center="xs">
						<PaddedCol xs>
							<Row center="xs">
								<Col xs={iconBarWidth}>
									<IconBar
										entities={[
											{ name: 'difficulty', text: getIconTitle('nivå', difficulty[props.difficulty] || '') },
											{ name: 'activity', text: getIconTitle('aktiv', formatTime(props.timeCooking)) },
											{ name: 'total-time', text: getIconTitle('totalt', formatTime(props.timeTotal)) },
										]}
										textSize={textSize}
										iconSize={iconSize}
									/>
								</Col>
							</Row>
							<Row center="xs">
								<Col xs={iconBarWidth}><Heading>{ props.title }</Heading></Col>
							</Row>
						</PaddedCol>
					</Row>
				</Col>
			</Row>
		);
	};

	HeroUnit.propTypes = {
		image: PropTypes.shape({
			src: PropTypes.string.isRequired,
			ratio: PropTypes.number,
			fallbackSrc: PropTypes.string.isRequired,
			placeholder: PropTypes.string.isRequired,
			difficulty: PropTypes.number,
			activityTime: PropTypes.number,
			totalTime: PropTypes.number,
		}).isRequired,
		difficulty: PropTypes.number.isRequired,
		timeCooking: PropTypes.number.isRequired,
		timeTotal: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
	};

	return HeroUnit;
};

const SmallHorizontalHeroUnit = createHeroUnit('sm');
const MediumHorizontalHeroUnit = createHeroUnit('md');
const LargeHorizontalHeroUnit = createHeroUnit('lg');

export { SmallHorizontalHeroUnit, MediumHorizontalHeroUnit, LargeHorizontalHeroUnit };
