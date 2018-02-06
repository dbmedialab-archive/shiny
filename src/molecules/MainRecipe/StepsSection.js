import React from 'react';

import { RecipeSteps } from '../../atoms/MainRecipe/StepsSection';

class StepsSection extends React.Component {
	getSteps() {
		const { steps } = this.props;
		return steps.map((item, index) => {
			return <li key={index} > {item.Description.replace(/<\/?[^>]+>/g, '')} </li>;
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

export { StepsSection };
