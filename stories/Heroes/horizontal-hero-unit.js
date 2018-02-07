import React from 'react';

import { HorizontalHeroUnit } from './../../src/molecules/HorizontalHeroUnit';
import { Source             } from '../../src/molecules/Source';

const image = {
	placeholder: 'https://9.dbstatic.no/69082718.jpg?imageId=69082718&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=980&height=490&compression=70',
	src: 'https://9.dbstatic.no/69082718.jpg?imageId=69082718&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=98&height=49&compression=30',
	ratio: 0.5,
	fallbackSrc: '',
};

export default () => (
	<section>
		<HorizontalHeroUnit image={image} />
	</section>
);
