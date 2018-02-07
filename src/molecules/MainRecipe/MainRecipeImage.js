import React from 'react';
import propTypes from 'prop-types';

import { MainImageWrapper } from '../../atoms/MainRecipe/MainImageWrapper';
import { MainImage } from '../../atoms/MainRecipe/MainImage';

const MainRecipeImage = props => (
	<MainImageWrapper>
		<MainImage src={props.src} />
	</MainImageWrapper>
);

MainRecipeImage.propTypes = {
	src: propTypes.string.isRequired,
};

export { MainRecipeImage };
