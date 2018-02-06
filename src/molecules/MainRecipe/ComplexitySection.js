import React from 'react';
import propTypes from 'prop-types';

import { ComplexitySectionWrapper } from '../../atoms/MainRecipe/ComplexitySectionWrapper';
import { ComplexitySectionHeader } from '../../atoms/MainRecipe/ComplexitySectionHeader';

import { IconsBar } from '../../molecules/MainRecipe/IconsBar';

const ComplexitySection = props => (
	<ComplexitySectionWrapper>
		<IconsBar entities={props.entities} />
		<ComplexitySectionHeader>{props.headerTitle}</ComplexitySectionHeader>
	</ComplexitySectionWrapper>
);
ComplexitySection.propTypes = {
	entities: propTypes.shape({
		// @TODO what should this shape look like?
	}).isRequired,
	headerTitle: propTypes.string.isRequired,
};

export { ComplexitySection };
