import React from 'react';

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
						<IconsBar entities={[{ name: 'nut' }, { name: 'gluten' }, { name: 'fish' }]} />
					</Col>
					<Col md={5} mdOffset={2} >
						<SubCategoryHeader text="Oppskrift" />
						<Author />
					</Col>
				</Row>
				<Row>
					<Col md={5}>
						<SubCategoryHeader text="Passer For" />
						<IconsBar entities={[{ name: 'pork' }, { name: 'vegan' }, { name: 'vegetarian' }]} />
					</Col>
					<Col md={5} mdOffset={2}>
						<SubCategoryHeader text="Vurdering" />
						<StarsRating count={5} size={45} />
					</Col>
				</Row>
			</DetailsSectionWrapper>
		);
	}
}

export { DetailsSection };
