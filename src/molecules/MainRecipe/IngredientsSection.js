import React from 'react';

import { Row } from '../../atoms/Row';
import { Col } from '../../atoms/Col';
import { Icon } from '../../atoms/Icon';
import { Buttons, Counter, Pers, Quantity, AddCart } from '../../atoms/MainRecipe/IngredientsSection';

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
				<li key={index}> {`${this.calculateAmount(item.pivot.amount)} ${item.pivot.type}`} <span>{item.title}</span></li>
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
			servings: ++this.state.servings,
		});
	}

	decrementServings() {
		const servings = this.state.servings > 0 ? --this.state.servings : 0;
		this.setState({
			servings: servings,
		});
	}

	render() {
		return (
			<div>
				<h1>DETTE TRENGER DU</h1>
				<Buttons>
					<span>
						<Icon name="Remove" size={2.2} onClick={this.decrementServings} />
					</span>
				</Buttons>
				<Counter>
					<span>{this.state.servings}</span>
				</Counter>
				<Buttons>
					<span>
						<Icon name="Add" size={2.2} onClick={this.incrementServings} />
					</span>
				</Buttons>
				<Pers>
					<span>PERSONER</span>
				</Pers>
				<Row>
					<Col xs={9}>
						<Quantity>
							{ this.getIngredients() }
						</Quantity>
					</Col>
				</Row>
				<AddCart>
					<Icon name="Add" size={2.2} />
					<span>LEGG I HANDLELISTE</span>
				</AddCart>
			</div>
		);
	}
}

export { IngredientsSection };
