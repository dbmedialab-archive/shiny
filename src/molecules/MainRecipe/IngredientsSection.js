import React from 'react';
import propTypes from 'prop-types';

import { Row } from '../../atoms/Row';
import { Col } from '../../atoms/Col';
import { FontIcon } from '../../atoms/FontIcon';
import { Quantity, Wrapper } from '../../atoms/MainRecipe/quantity';
import { Buttons, Counter, Pers, AddCart } from '../../atoms/MainRecipe/IngredientsSection';


class IngredientsSection extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			servings: props.servings || 0,
			ingredients: props.ingredients || [],
		};

		this.incrementServings = this.incrementServings.bind(this);
		this.decrementServings = this.decrementServings.bind(this);
	}

	getIngredients() {
		const { ingredients } = this.state;

		return ingredients.map((item, index) => {
			return (
				<Quantity
					key={index}
					amount={this.calculateAmount(item.pivot.amount)}
					type={item.pivot.type}
					title={item.title}
				/>
			);
		});
	}

	calculateAmount(amount) {
		if (!amount) {
			return null;
		}

		amount = parseFloat(amount);

		const baseServings = this.props.baseServings || 1;
		const servings = this.state.servings || 1;

		amount = (amount / baseServings) * servings;

		if (amount <= 0.25) {
			return 0.25;
		} else if (amount < 10) {
			return Math.round(amount * 4) / 4;
		} else if (amount < 100) {
			return Math.round(amount / 5) * 5;
		} else if (amount < 1000) {
			return Math.round(amount / 10) * 10;
		}

		return Math.round(amount / 100) * 100;
	}

	incrementServings() {
		this.setState({
			servings: this.state.servings + 1,
		});
	}

	decrementServings() {
		const servings = this.state.servings > 0
			? this.state.servings - 1
			: 0;
		this.setState({
			servings,
		});
	}

	render() {
		return (
			<div>
				<h1>DETTE TRENGER DU</h1>
				<Buttons>
					<span>
						<FontIcon name="remove" size={2.2} onClick={this.decrementServings} />
					</span>
				</Buttons>
				<Counter>
					<span>{this.state.servings}</span>
				</Counter>
				<Buttons>
					<span>
						<FontIcon name="add" size={2.2} onClick={this.incrementServings} />
					</span>
				</Buttons>
				<Pers>
					<span>PERSONER</span>
				</Pers>
				<Row>
					<Col xs={9}>
						<Wrapper> { this.getIngredients() } </Wrapper>
					</Col>
				</Row>
				<AddCart>
					<FontIcon name="add" size={2.2} />
					<span>LEGG I HANDLELISTE</span>
				</AddCart>
			</div>
		);
	}
}

// TODO Keep this in sync with wolverine-api
IngredientsSection.propTypes = {
	servings: propTypes.number,
	baseServings: propTypes.number,
	ingredients: propTypes.arrayOf(propTypes.shape({
		title: propTypes.string,
		ingredients: propTypes.arrayOf(propTypes.shape({
			title: propTypes.string,
			slug: propTypes.string,
			pivot: propTypes.shape({
				amount: propTypes.number,
				type: propTypes.string,
			}),
		})),
	})),
};
IngredientsSection.defaultProps = {
	servings: 1,
	baseServings: 1,
	ingredients: [],
};

export { IngredientsSection };
