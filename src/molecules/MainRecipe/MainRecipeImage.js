import React from 'react';

import { MainImageWrapper } from '../../atoms/MainRecipe/MainImageWrapper';
import { MainImage } from '../../atoms/MainRecipe/MainImage';

const MainRecipeImage = props => (
	<MainImageWrapper>
		<MainImage src={props.src} />
	</MainImageWrapper>
);

export { MainRecipeImage };
