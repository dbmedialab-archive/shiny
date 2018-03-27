import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
	Row,
	Col,
	FigCaption,
	FrontSmallHeading,
} from '../..';

import { IconBar } from '../IconBar';
// TODO uncomment after rating will be added
// import { StarsRating } from '../../molecules/StarsRating';
import { BylineWithTwoLines } from '../../atoms/BylineWithTwoLines';

const RecipeMetaDataWrapper = styled.div`
	padding: 0;
	margin: 0 auto;
	@media screen and (min-width: ${props => props.theme.variables.mediumWidth}) {
		padding: 1% 10%;
	}
`;

const PaddedCol = Col.extend`
	margin-top: 2rem;
`;

const RecipeMetaData  = ({
	allergies,
	preferences,
	author,
	rating,
	mobile,
	imgCaption,
	numVotes,
}) => {
	allergies = allergies.map((allergyItem) => {
		return {
			text: allergyItem.title,
			name: allergyItem.slug,
		};
	});
	preferences = preferences.map((preferenceItem) => {
		return {
			text: preferenceItem.title,
			name: preferenceItem.slug,
		};
	});

	// mobile has different order of elements
	// Passer for -> Inneholder -> Oppskrift
	if (mobile) {
		return (
			<RecipeMetaDataWrapper>
				<Row>
					<Col md={false} sm={12} xs={12}>
						<FrontSmallHeading lineWidth={6}>Passer For</FrontSmallHeading>
						<Col md={10} >
							<IconBar entities={preferences} textSize={1.2} iconSize={4} />
						</Col>
					</Col>
				</Row>
				<Row>
					<Col md={false} sm={12} xs={12}>
						<FrontSmallHeading lineWidth={6} >Inneholder</FrontSmallHeading>
						<Col md={10} >
							<IconBar entities={allergies} textSize={1.2} iconSize={4} />
						</Col>
					</Col>
				</Row>
				<Row>
					<Col md={false} sm={12} xs={12}>
						<FrontSmallHeading lineWidth={6}>Oppskrift</FrontSmallHeading>
						<BylineWithTwoLines name={author.name} email={author.email} src={author.profileImage.mediumPortrait} />
					</Col>
				</Row>
			</RecipeMetaDataWrapper>
		);
	}

	return (
		<RecipeMetaDataWrapper>
			<Row>
				<PaddedCol xs md={8} mdOffset={2}>
					<FigCaption>
						{ imgCaption }
					</FigCaption>
				</PaddedCol>
			</Row>
			<Row>
				<Col xs={12} md={3} mdOffset={2}>
					<FrontSmallHeading lineWidth={6} >Inneholder</FrontSmallHeading>
					<Col md={10} >
						<IconBar entities={allergies} textSize={1.2} iconSize={4} />
					</Col>
				</Col>
				<Col xs={12} md={3} mdOffset={1}>
					<FrontSmallHeading lineWidth={6}>Oppskrift</FrontSmallHeading>
					<BylineWithTwoLines name={author.name} email={author.email} src={author.profileImage.mediumPortrait} />
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={3} mdOffset={2}>
					<FrontSmallHeading lineWidth={6}>Passer For</FrontSmallHeading>
					<Col md={10} >
						<IconBar entities={preferences} textSize={1.2} iconSize={4} />
					</Col>
				</Col>
				<Col xs={12} md={3} mdOffset={1}>
					{/* <FrontSmallHeading lineWidth={6}>Vurdering</FrontSmallHeading> */}
					{/* <StarsRating count={5} size={29} value={rating} /> */}
				</Col>
			</Row>
		</RecipeMetaDataWrapper>
	);
};

const IconValues = PropTypes.shape({
	slug: PropTypes.string,
	value: PropTypes.number,
});

RecipeMetaData.defaultProps = {
	allergies: [],
	preferences: [],
	author: {},
	rating: 0,
	mobile: false,
	imgCaption: '',
	numVotes: 0,
};

RecipeMetaData.propTypes = {
	allergies: PropTypes.arrayOf(IconValues),
	preferences: PropTypes.arrayOf(IconValues),
	author: PropTypes.shape({
		name: PropTypes.string,
		email: PropTypes.string,
		profileImage: PropTypes.shape({
			title: PropTypes.string,
			seoFilename: PropTypes.string,
			mediumPortrait: PropTypes.string,
		}),
	}),
	rating: PropTypes.number,
	mobile: PropTypes.bool,
	imgCaption: PropTypes.string,
	numVotes: PropTypes.number,
};


export { RecipeMetaData };
