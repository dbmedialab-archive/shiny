/* eslint-disable max-len */
import React from 'react';
import propTypes from 'prop-types';

import { Row } from '../../atoms/Row';
import { Col  } from '../../atoms/Col';
import { FontIcon } from '../../atoms/FontIcon';
import { Line, LineShort, Tags, Social } from '../../atoms/adTags';

const AdTags = ({ tags }) => {
	const resolvedTags = tags.map((item, index) => (
		<p key={index}> <a key={index} href={item.Url}>{item.title.toUpperCase()}</a></p>
	));

	return (
		<section>
			<Row>
				<Col xs={4}>
					<div>
						<img
							style={{ maxWidth: '100%' }}
							alt="Alt text goes here"
							src="http://www.eatsouthbank.com.au/wp-content/uploads/2017/03/Plough-Inn-Buffalo-wings-2-320x250-c-default.jpg"
						/>
					</div>
				</Col>
				<Col xs={8}>
					<div  style={{ marginBottom: 10 }}>
						<span>TAGGER</span>
						<Line />
					</div>
					<Tags>
						{resolvedTags}
					</Tags>
					<div style={{ marginTop: 17 }}>
						<span>DEL OPPSKRIFTEN</span>
						<LineShort />
					</div>
					<Social>
						<FontIcon name="Facebook" size={5.2} />
						<FontIcon name="Twitter" size={5.2} />
						<FontIcon name="Linkedin" size={5.2} />
						<FontIcon name="Sience" size={5.2} />
					</Social>
				</Col>
			</Row>
		</section>
	);
};
AdTags.propTypes = {
	tags: propTypes.arrayOf(propTypes.shape({ Url: propTypes.string })).isRequired,
};

export default AdTags;
