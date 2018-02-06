import React from 'react';

import StepsMolecule from '../molecules/MatSteps/MatSteps';

const Steps = (props) => {
	return <StepsMolecule steps={props.steps} ingredients={props.ingredients} />;
};

export { Steps };
