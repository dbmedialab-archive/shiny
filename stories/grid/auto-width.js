import React from 'react';
import PropTypes from 'prop-types';

import { Code } from '../../src/atoms/Code';
import BlueBox from './blue-box';

import {
	Heading,
	HugeHeading,
	Row,
	Col as GridCol,
	Paragraph,
} from '../../src';

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
