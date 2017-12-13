import React from 'react';
import PropTypes from 'prop-types';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { LeetTextarea } from '../../src/atoms/LeetTextarea';

import { Row } from '../../src/atoms/Row';
import { GridCol } from '../../src/atoms/Col';
import BlueBox, { BluerBox } from './blue-box';

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
const MotherCol = ({ children = null, ...rest }) => (
	<GridCol {...rest}>
		<BluerBox>
			{children}
		</BluerBox>
	</GridCol>
);
MotherCol.propTypes = Col.propTypes;

export default () => (
	<section>
		<HugeHeading>Grid</HugeHeading>
		<Heading>Alignment</Heading>
		<p>
			Add props to align elements to the start or end of row as well as the top, bottom, or center of a column.
		</p>
		<Row>
			<MotherCol xs={12}>
				<Row start="xs">
					<Col xs={6}>start-row</Col>
				</Row>
			</MotherCol>
			<MotherCol xs={12}>
				<Row center="xs">
					<Col xs={6}>center-row</Col>
				</Row>
			</MotherCol>
			<MotherCol xs={12}>
				<Row end="xs">
					<Col xs={6}>end-row</Col>
				</Row>
			</MotherCol>
		</Row>
		<Row top="xs">
			<Col xs={6}>
				top-row <br />
				several lines <br />
				several lines <br />
				several lines <br />
			</Col>
			<Col xs={6} />
		</Row>
		<Row middle="xs">
			<Col xs={6}>
				middle-row <br />
				several lines <br />
				several lines <br />
				several lines <br />
			</Col>
			<Col xs={6} />
		</Row>
		<Row bottom="xs">
			<Col xs={6}>
				bottom-row <br />
				several lines <br />
				several lines <br />
				several lines <br />
			</Col>
			<Col xs={6} />
		</Row>

		<LeetTextarea>
			{`
import { Row } from 'shiny/src/atoms/Row';
import { Col } from 'shiny/src/atoms/Col';

<Row>
	<Col xs={12}>
		<Row start="xs">
			<Col xs={6}>start-row</Col>
		</Row>
	</Col>
	<Col xs={12}>
		<Row center="xs">
			<Col xs={6}>center-row</Col>
		</Row>
	</Col>
	<Col xs={12}>
		<Row end="xs">
			<Col xs={6}>end-row</Col>
		</Row>
	</Col>
</Row>
<Row top="xs">
	<Col xs={6}>
		top-row <br />
		several lines <br />
		several lines <br />
		several lines <br />
	</Col>
	<Col xs={6} />
</Row>
<Row middle="xs">
	<Col xs={6}>
		middle-row <br />
		several lines <br />
		several lines <br />
		several lines <br />
	</Col>
	<Col xs={6} />
</Row>
<Row bottom="xs">
	<Col xs={6}>
		bottom-row <br />
		several lines <br />
		several lines <br />
		several lines <br />
	</Col>
	<Col xs={6} />
</Row>
			`}
		</LeetTextarea>
	</section>
);
