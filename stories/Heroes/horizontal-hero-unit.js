import React from 'react';

import { SmallHorizontalHeroUnit,
	MediumHorizontalHeroUnit,
	LargeHorizontalHeroUnit } from '../../src/molecules/HorizontalHeroUnit';
import { HugeHeading 		  } from '../../src/atoms/Heading';
import { Row 				  } from '../../src/atoms/Row';
import { Col 				  } from '../../src/atoms/Col';

/* eslint-disable max-len */
const image = {
	placeholder: 'https://www.dagbladet.no/mat/bilder/c/xl/1/bcff2fea-biff-med-asparges-og-soppsaus.jpg',
	src: 'https://www.dagbladet.no/mat/bilder/c/xl/1/bcff2fea-biff-med-asparges-og-soppsaus.jpg',
	ratio: 0.5,
	fallbackSrc: '',
};

const difficulty = 2;
const timeCooking = 100;
const timeTotal = 80;
const title = 'Chilibiffer med grillet halloumi og kikertrøre';
/* eslint-enable max-len */

export default () => (
	<section>
		<HugeHeading>Recipe Hero Unit</HugeHeading>
		<Row>
			<Col xs>
				<LargeHorizontalHeroUnit
					image={image}
					difficulty={difficulty}
					timeCooking={timeCooking}
					timeTotal={timeTotal}
					title={title}
				/>
			</Col>
		</Row>
		<Row>
			<Col xs={8}>
				<MediumHorizontalHeroUnit
					image={image}
					difficulty={difficulty}
					timeCooking={timeCooking}
					timeTotal={timeTotal}
					title={title}
				/>
			</Col>
		</Row>
		<Row>
			<Col xs={6}>
				<SmallHorizontalHeroUnit
					image={image}
					difficulty={difficulty}
					timeCooking={timeCooking}
					timeTotal={timeTotal}
					title={title}
				/>
			</Col>
		</Row>
	</section>
);
