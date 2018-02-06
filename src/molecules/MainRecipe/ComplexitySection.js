import React from 'react';

import { ComplexitySectionWrapper } from '../../atoms/MainRecipe/ComplexitySectionWrapper';
import { ComplexitySectionHeader } from '../../atoms/MainRecipe/ComplexitySectionHeader';

import { IconsBar } from '../../molecules/MainRecipe/IconsBar';

const ComplexitySection = props => (
	<ComplexitySectionWrapper>
		<IconsBar entities={props.entities} />
		<ComplexitySectionHeader>{props.headerTitle}</ComplexitySectionHeader>
	</ComplexitySectionWrapper>
);

export { ComplexitySection };
