/* eslint-disable max-len */
import React from 'react';

import { Row } from '../../src/atoms/Row';
import { Col  } from '../../src/atoms/Col';
import { Icon } from '../../src/atoms/Icon';
import { Line, LineShort, Tags, Social } from "../../src/atoms/adTags";

export default () => (
	<section>
		<h1>Ad & Tags</h1>
		<Row>
			<Col xs={4}>
				<div><img src="https://dummyimage.com/300x230/000/fff"/></div>
			</Col>
			<Col xs={8}>
				<div  Style="margin-bottom: 15px;">
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
				<div Style="margin-top: 17px;">
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
