/* eslint-disable max-len */
import React from 'react';

import { Row } from '../../atoms/Row';
import { Col  } from '../../atoms/Col';
import { Icon } from '../../atoms/Icon';
import { Line, LineShort, Tags, Social } from "../../atoms/adTags";

export default class extends React.Component {
	render() {
		console.log(this.props.tags);
		const tags = this.props.tags.map((item, index) => {
			return <p key={index}> {item.title.toUpperCase()}</p>
		});
		return (
			<section>
				<Row>
					<Col xs={4}>
						<div><img src="http://www.eatsouthbank.com.au/wp-content/uploads/2017/03/Plough-Inn-Buffalo-wings-2-320x250-c-default.jpg"/></div>
					</Col>
					<Col xs={8}>
						<div  style={{ marginBottom: 10 }}>
							<span>TAGGER</span>
							<Line/>
						</div>
						<Tags>
							{tags}
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

