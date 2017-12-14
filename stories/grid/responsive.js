import React from 'react';
import PropTypes from 'prop-types';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { Code } from '../../src/atoms/Code';

import { Row } from '../../src/atoms/Row';
import { Col as GridCol } from '../../src/atoms/Col';
import BlueBox from './blue-box';

const Col = ({ children = null, ...rest }) => (
	<GridCol {...rest}>
		<BlueBox>
			{children}
		</BlueBox>
	</GridCol>
);
Col.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default () => (
	<section>
		<HugeHeading>Grid</HugeHeading>
		<Heading>Responsive</Heading>
		<p>
			Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs,
			sm, md & lg viewport widths.
		</p>
		<p>The break points can be customised in the styled-components theme.</p>
		<Row>
			<Col xs={12} sm={3} md={2} lg={1}>xs-12 sm-3 md-2 lg-1</Col>
			<Col xs={6} sm={6} md={8} lg={10}>xs-6 sm-6 md-8 lg-10</Col>
			<Col xs={6} sm={3} md={2} lg={1}>xs-6 sm-3 md-2 lg-1</Col>
		</Row>
		<Row>
			<Col xs={12} sm={3} md={2} lg={1}>xs-12 sm-3 md-2 lg-1</Col>
			<Col xs={12} sm={9} md={10} lg={11}>xs-12 sm-9 md-10 lg-11</Col>
		</Row>
		<Row>
			<Col xs={10} sm={6} md={8} lg={10}>xs-10 sm-6 md-8 lg-10</Col>
			<Col xs={2} sm={6} md={4} lg={2}>xs-2 sm-6 md-4 lg-2</Col>
		</Row>

		<Code>
			{`
import {
	Row,
	Col,
} from '@aller/shiny';

<Row>
	<Col xs={12} sm={3} md={2} lg={1} />
	<Col xs={6} sm={6} md={8} lg={10} />
	<Col xs={6} sm={3} md={2} lg={1} />
</Row>
<Row>
	<Col xs={12} sm={3} md={2} lg={1} />
	<Col xs={12} sm={9} md={10} lg={11} />
</Row>
<Row>
	<Col xs={10} sm={6} md={8} lg={10} />
	<Col xs={2} sm={6} md={4} lg={2} />
</Row>
			`}
		</Code>
	</section>
);
