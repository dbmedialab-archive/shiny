import React from 'react';
import propTypes from 'prop-types';

import { RecipeSteps } from '../../atoms/MainRecipe/StepsSection';

class StepsSection extends React.Component {
	getSteps() {
		const { steps } = this.props;
		return steps.map((item, index) => {
			return <li key={index} > {item.description.replace(/<\/?[^>]+>/g, '')} </li>;
		});
	}

	render() {
		return (
			<div>
				<h1>SLIK GJØR DU</h1>
				<RecipeSteps>
					{ this.getSteps() }
				</RecipeSteps>
			</div>
		);
	}
}

StepsSection.propTypes = {
	steps: propTypes.array, // eslint-disable-line react/forbid-prop-types
};
StepsSection.defaultProps = {
	steps: [],
};

export { StepsSection };
