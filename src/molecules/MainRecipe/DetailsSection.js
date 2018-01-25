import React from 'react';

import { Row } from '../../atoms/Row';
import { Col } from '../../atoms/Col';
import { DetailsSectionWrapper } from '../../atoms/MainRecipe/DetailsSectionWrapper';
import { IconsBar } from './IconsBar';

class DetailsSection extends React.Component {
	render() {
		return (
			<DetailsSectionWrapper>
				<Row>
					<Col md={12}>
						SMAKFULL OG SAFTIG. Kalkun er et festmåltid du kan spise med god samvittighet. super
						Foto: matrat.no / studio dreyer-hensley
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<IconsBar />
					</Col>
					<Col md={6}>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<IconsBar />
					</Col>
					<Col md={6}>
					</Col>
				</Row>
			</DetailsSectionWrapper>
		);
	}
}

export { DetailsSection };
