import React from 'react';
import propTypes from 'prop-types';

import { SubCategoryHeaderWrapper } from '../../atoms/MainRecipe/SubCategoryHeaderWrapper';

const SubCategoryHeader = props => (
	<SubCategoryHeaderWrapper>
		<h3>{props.text}</h3>
	</SubCategoryHeaderWrapper>
);
SubCategoryHeader.propTypes = {
	text: propTypes.string.isRequired,
};

export { SubCategoryHeader };
