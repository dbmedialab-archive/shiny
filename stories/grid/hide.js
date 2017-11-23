import React from 'react';
import PropTypes from 'prop-types';

import Heading, { HugeHeading } from '../../src/atoms/Heading';
import LeetTextarea from '../../src/atoms/LeetTextarea';

import Row from '../../src/atoms/Row';
import GridCol from '../../src/atoms/Col';
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
		<Heading>Hide</Heading>
		<p>
			You can simply hide some elements for a given breakpoint by passing `false` to the breakpoint properties.
		</p>
		<Row>
			<Col xs={12} md={6}>xs-12 md-6</Col>
			<Col xs={false} md={6}>xs-false md-6</Col>
		</Row>

		<LeetTextarea>
			{`
import Row from 'shiny/src/atoms/Row';
import Col from 'shiny/src/atoms/Col';

<Row>
	<Col xs={12} md={6}>xs-12 md-6</Col>
	<Col xs={false} md={6}>xs-false md-6</Col>
</Row>
			`}
		</LeetTextarea>
	</section>
);
