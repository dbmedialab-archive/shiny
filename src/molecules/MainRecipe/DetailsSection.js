import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import { Row } from '../../atoms/Row';
import { Col } from '../../atoms/Col';
import { FrontSmallHeading } from '../../atoms/FrontHeading';

import { IconBar } from '../IconBar';
import { StarsRating } from '../../atoms/StarsRating';
import { BylineWithTwoLines } from '../../atoms/BylineWithTwoLines';

const DetailsSectionInfo = Styled.div`
	font-size: 1.4rem;
	margin-bottom: 3.0rem;
`;

const DetailsSectionWrapper = Styled.div`
	padding: 1% 10%;
	margin: 0 auto;
`;

const DetailsSection  = ({
	allergies,
	preferences,
	author,
	rating,
}) => (
	<DetailsSectionWrapper>
		<Row>
			<Col md={12}>
				<DetailsSectionInfo>
							SMAKFULL OG SAFTIG. Kalkun er et festmåltid du kan spise med god samvittighet.<br />
							super Foto: matrat.no / studio dreyer-hensley
				</DetailsSectionInfo>
			</Col>
		</Row>
		<Row>
			<Col xs={12} md={12} lg={6}>
				<FrontSmallHeading>Inneholder</FrontSmallHeading>
				{ <IconBar entities={allergies} textSize={1.2}	iconSize={4} /> }
			</Col>
			<Col xs={12} md={12} lg={6}>
				<FrontSmallHeading>Oppskrift</FrontSmallHeading>
				<BylineWithTwoLines name={author.name} email={author.email} src={author.profileImage.urlMPortrait} />
			</Col>
		</Row>
		<Row>
			<Col xs={12} md={12} lg={6}>
				<FrontSmallHeading>Passer For</FrontSmallHeading>
				{ <IconBar entities={preferences}  textSize={1.2}	iconSize={4} /> }
			</Col>
			<Col xs={12} md={12} lg={6}>
				<FrontSmallHeading>Vurdering</FrontSmallHeading>
				{/* <StarsRating count={5} size={45} value={rating} /> */}
			</Col>
		</Row>
	</DetailsSectionWrapper>
);

const IconValues = PropTypes.shape({
	slug: PropTypes.string,
	value: PropTypes.number,
});

DetailsSection.defaultProps = {
	allergies: [],
	preferences: [],
	author: {},
	rating: 0,
};

DetailsSection.propTypes = {
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
};


export { DetailsSection };
