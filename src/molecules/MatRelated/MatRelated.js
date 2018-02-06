/* eslint-disable max-len */
import React from 'react';

import { Row } from '../../atoms/Row';
import { Col  } from '../../atoms/Col';
import { IconsBar } from '../MainRecipe/IconsBar';
import { ComplexitySectionHeader } from '../../atoms/MainRecipe/ComplexitySectionHeader';

export default class Related extends React.Component {
	render() {
		return (
			<section style={{ width: 1122, margin: '0 auto'}}>
				<h1>Related Section</h1>
				<Row>
					<Col md={6}>
						<Row>
							<Col md={5}>
								<div><img width="230" src="https://i.pinimg.com/474x/7a/15/a4/7a15a4ca174f15f533b79b2672befb2b--lunch-recipes-paleo-recipes.jpg"/></div>
							</Col>
							<Col md={5}>
								<IconsBar entities={this.props.entities} />
								<ComplexitySectionHeader style={{ 'fontSize': 18 }}>{this.props.headerTitle}</ComplexitySectionHeader>
							</Col>
						</Row>
					</Col>
					<Col md={6}>
						<Row>
							<Col md={5}>
								<div><img width="230" src="https://i.pinimg.com/736x/51/88/b7/5188b77e242dcb8983b43cf8df072c52--spinach-lasagna-spinach-casserole.jpg"/></div>
							</Col>
							<Col md={5}>
								<IconsBar entities={this.props.entities} />
								<ComplexitySectionHeader style={{ 'fontSize': 18 }}>{this.props.headerTitle}</ComplexitySectionHeader>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row style={{ 'marginBottom': 20 }}>
					<Col md={6}>
						<Row>
							<Col md={5}>
								<div><img width="230" src="http://www.vancitybuzz.com/wp-content/uploads/2015/09/Pappardelle-Bolognaise_0001-230x180.jpg"/></div>
							</Col>
							<Col md={5}>
								<IconsBar entities={this.props.entities} />
								<ComplexitySectionHeader style={{ 'fontSize': 18 }}>{this.props.headerTitle}</ComplexitySectionHeader>
							</Col>
						</Row>
					</Col>
					<Col md={6}>
						<Row>
							<Col md={5}>
								<div><img width="230" src="http://www.fleuroudevoshaar.nl/wp-content/uploads/2014/09/geroosterde-groenten-wortels-stock-512x341-230x180.jpg"/></div>
							</Col>
							<Col md={5}>
								<IconsBar entities={this.props.entities} />
								<ComplexitySectionHeader style={{ 'fontSize': 18 }}>{this.props.headerTitle}</ComplexitySectionHeader>
							</Col>
						</Row>
					</Col>
				</Row>
			</section>
		);
	}
}
