import React from 'react';

import { Row } from '../../atoms/Row';
import { Col } from '../../atoms/Col';
import { AuthorWrapper } from '../../atoms/MainRecipe/AuthorWrapper';
import { AuthorPhoto } from '../../atoms/MainRecipe/AuthorPhoto';

const Author = () => (
	<AuthorWrapper>
		<Row>
			<Col md={3}>
				<AuthorPhoto src="https://24smi.org/public/media/250x250/celebrity/2016/04/08/1460133211-celeb_img_None.jpg" />
			</Col>
			<Col md={9}>
				<Row>
					<Col>Matprat</Col>
				</Row>
				<Row>
					<Col>mat@dagbladet.no</Col>
				</Row>
			</Col>
		</Row>
	</AuthorWrapper>
);

export { Author };
