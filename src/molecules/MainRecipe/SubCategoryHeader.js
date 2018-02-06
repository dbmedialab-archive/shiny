import React from 'react';

import { SubCategoryHeaderWrapper } from '../../atoms/MainRecipe/SubCategoryHeaderWrapper';
import { MediumHeading } from '../../atoms/Heading';

const SubCategoryHeader = props => (
	<SubCategoryHeaderWrapper>
		<h3>{props.text}</h3>
	</SubCategoryHeaderWrapper>
);

export { SubCategoryHeader };
