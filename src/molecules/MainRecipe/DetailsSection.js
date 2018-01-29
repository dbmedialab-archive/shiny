import React from 'react';
import PropTypes from 'prop-types';

import { Row } from '../../atoms/Row';
import { Col } from '../../atoms/Col';
import { DetailsSectionWrapper } from '../../atoms/MainRecipe/DetailsSectionWrapper';
import { SubCategoryHeader } from './SubCategoryHeader';
import { DetailsSectionInfo } from '../../atoms/MainRecipe/DetailsSectionInfo';
import { IconsBar } from './IconsBar';
import { Author } from './Author';
import { StarsRating } from '../../atoms/StarsRating';

class DetailsSection extends React.Component {
	render() {
		const { allergies, preferences, author, rating } = this.props;
		return (
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
					<Col md={5}>
						<SubCategoryHeader text="Inneholder" />
						<IconsBar entities={allergies} />
					</Col>
					<Col md={5} mdOffset={2} >
						<SubCategoryHeader text="Oppskrift" />
						<Author authorData={author} />
					</Col>
				</Row>
				<Row>
					<Col md={5}>
						<SubCategoryHeader text="Passer For" />
						<IconsBar entities={preferences} />
					</Col>
					<Col md={5} mdOffset={2}>
						<SubCategoryHeader text="Vurdering" />
						<StarsRating count={5} size={45} value={rating} />
					</Col>
				</Row>
			</DetailsSectionWrapper>
		);
	}
}

const IconValues = PropTypes.shape({
	slug: PropTypes.string,
	value: PropTypes.number,
});

DetailsSection.defaultProps = {
	allergies: [],
	preferences: [],
	author: {},
	rating: 0
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
