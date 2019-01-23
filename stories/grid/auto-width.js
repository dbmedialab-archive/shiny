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
		<Heading>Auto Width</Heading>
		<Paragraph>Add any number of auto sizing columns to a row. Let the grid figure it out.</Paragraph>

		<Row>
			<Col xs>xs</Col>
			<Col xs>xs</Col>
		</Row>
		<Row>
			<Col xs>xs</Col>
			<Col xs>xs</Col>
			<Col xs>xs</Col>
		</Row>
		<Code language="jsx">
			{`
import {
	Row,
	Col,
} from '@aller/shiny';


<Row>
	<Col xs>xs</Col>
	<Col xs>xs</Col>
</Row>
<Row>
	<Col xs>xs</Col>
	<Col xs>xs</Col>
	<Col xs>xs</Col>
</Row>
			`}
		</Code>

	</section>
);
