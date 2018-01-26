/* eslint-disable max-len */
import React from 'react';

import { Row } from '../../atoms/Row';
import { Col  } from '../../atoms/Col';
import { FooterMat } from '../../atoms/footerMat';

export default class Footer extends React.Component {
	render() {
		return (
			<section>
				<h1>FOOTER</h1>
				<FooterMat>
					<Row>
						<Col xs={3}>
							<p>Oppskrift.no</p>
						</Col>
						<Col xs={3}>
							<p>Postadresse:</p>
							<p>Boks 1184 Sentrum, 0107 Oslo</p>
							<br/>
							<p>Besøksadresse: </p>
							<p>Karvesvingen 1, 0579 Oslo</p>
							<p>Sentralbord: 24 00 10 00</p>
						</Col>
						<Col xs={3}>
							<p>Ansvarlig redaktør:</p>
							<br/><br/>
							<p>Utgiverselskap</p>
							<p>Aller Media AS</p>
						</Col>
						<Col xs={3}>
							<p>Annonseinfo</p>
							<p>Om informasjonskapsler</p>
							<p>Redaksjonen</p>
							<p>Personvern</p>
						</Col>
					</Row>
				</FooterMat>
			</section>
		);
	}
}
