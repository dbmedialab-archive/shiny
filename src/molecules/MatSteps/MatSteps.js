import React from 'react';
import PropTypes from 'prop-types';

import { Row } from '../../atoms/Row';
import { Col  } from '../../atoms/Col';
import { Icon } from '../../atoms/Icon';
import {
		Quantity,
		AddCart,
		RecipeSteps,
		Pers,
		Counter,
		Buttons
	} from "../../atoms/steps";

export default class MatSteps extends React.Component {
	render() {
		let steps = this.props.steps || [];
		let ingredients = this.props.ingredients || [];

		steps = steps.map( (item, index) => {
			return (
				<li key={index} > {item.description.replace(/<\/?[^>]+>/g,'')} </li>
			);
		});
		ingredients = ingredients.map( (item, index) => {
			return (
				<li key={index}> {item.pivot.amount + " " + item.pivot.type} <span key={index}>{item.title}</span></li>
			);
		} );

		return(
			<section>
				<Row>
					<Col xs={6}>
						<h1>DETTE TRENGER DU</h1>
						<Buttons>
					<span>
						<Icon name="Remove" size={2.2} />
					</span>
						</Buttons>
						<Counter>
							<span>10</span>
						</Counter>
						<Buttons>
					<span>
						<Icon name="Add" size={2.2} />
					</span>
						</Buttons>
						<Pers>
							<span>PERSONER</span>
						</Pers>
						<Row>
							<Col xs={9}>
								<Quantity>
									{ ingredients }
								</Quantity>
							</Col>
						</Row>
						<AddCart>
							<Icon name="Add" size={2.2} />
							<span>LEGG I HANDLELISTE</span>
						</AddCart>
					</Col>



					<Col xs={6}>
						<h1>SLIK GJØR DU</h1>
						<RecipeSteps>
							{ steps }
						</RecipeSteps>
					</Col>
				</Row>
			</section>
		);
	}
}
