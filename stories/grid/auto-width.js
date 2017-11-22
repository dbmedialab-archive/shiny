import React from 'react';
import PropTypes from 'prop-types';

import Heading, { HugeHeading } from '../../src/atoms/Heading';
import LeetTextarea from '../../src/atoms/LeetTextarea';

import { Row, Col as GridCol } from '../../src/atoms/Grid';
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
		<p>Add any number of auto sizing columns to a row. Let the grid figure it out.</p>

		<Row>
			<Col xs>xs</Col>
			<Col xs>xs</Col>
		</Row>
		<Row>
			<Col xs>xs</Col>
			<Col xs>xs</Col>
			<Col xs>xs</Col>
		</Row>
		<LeetTextarea>
			{`
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
		</LeetTextarea>

	</section>
);
