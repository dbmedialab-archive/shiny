/* eslint-disable max-len */
import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { LazyProgressiveImage } from '../../src/molecules/LazyProgressiveImage';
import { Source } from '../../src/molecules/Source';

const MultipleLazyProgressiveImagesStory = () => {
	const ids = [
		// 60375866,
		68797204,
		// 69761110,
		// 69829020,
		// 69782034,
		// 69767493,
		// 69838583,
		// 69838845,
	];
	return (
		ids.map((id, i) => (
			<LazyProgressiveImage
				src={`https://9.dbstatic.no/${id}.jpg?imageId=${id}&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=98&height=49&compression=30`}
				ratio={0.5}
				fallbackSrc={''}
				key={i}
			>
				<Source
					srcSet={`https://9.dbstatic.no/${id}.jpg?imageId=${id}&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=980&height=490&compression=70`}
				/>
				<Source
					srcSet={`https://9.dbstatic.no/${id}.jpg?imageId=${id}&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=480&height=230&compression=70`}
					media="(max-width: 48em)"
				/>
				<Source
					srcSet={`https://9.dbstatic.no/${id}.jpg?imageId=${id}&panow=0&panoy=0&panoh=0&panox=0&heightx=0&heightw=0&heighth=0&heighty=0&width=640&height=306&compression=70`}
					media="(max-width: 75em)"
				/>
			</LazyProgressiveImage>
		))
	);
};

export default withInfo('LazyProgressiveImage downloads a small version of an image first, then loads the correct size when it is ready')(MultipleLazyProgressiveImagesStory);
