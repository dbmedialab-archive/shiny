/* eslint-disable max-len */
import React from 'react';

import { Row } from '../../atoms/Row';
import { Col  } from '../../atoms/Col';
import { Icon } from '../../atoms/Icon';
import { Line, LineShort, Tags, Social } from "../../atoms/adTags";

export default class extends React.Component {
	render() {
		return (
			<section>
				<h1>Ad & Tags</h1>
				<Row>
					<Col xs={4}>
						<div><img src="https://dummyimage.com/320x250/000/fff"/></div>
					</Col>
					<Col xs={8}>
						<div  style={{ marginBottom: 10 }}>
							<span>TAGGER</span>
							<Line/>
						</div>
						<Tags>
							<p>MIDDAG</p>
							<p>KJØTT</p>
							<p>HELG</p>
							<p>FULG</p>
							<p>FEST</p>
							<p>HELSTEKT</p>
							<p>FESTMAT</p>
							<p>TRADISJON</p>
							<p>GRUNNOPPSKRIFT</p>
						</Tags>
						<div style={{ marginTop: 17 }}>
							<span>DEL OPPSKRIFTEN</span>
							<LineShort />
						</div>
						<Social>
							<Icon name="Facebook" size={5.2} />
							<Icon name="Twitter" size={5.2} />
							<Icon name="Linkedin" size={5.2} />
							<Icon name="Sience" size={5.2} />
						</Social>
					</Col>
				</Row>
			</section>
		);
	}
}

