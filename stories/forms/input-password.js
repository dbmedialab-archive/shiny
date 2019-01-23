import React from 'react';
import PropTypes from 'prop-types';

import { withInfo } from '@storybook/addon-info';

import {
	Row, Col, Input, MediumHeading,
} from '../../src';

const TextInputStory = () => (
	<>
		<MediumHeading>Values, placeholders etc</MediumHeading>
		<Row>
			<Col xs>
				<Input type="password" size="" />
			</Col>
			<Col xs>
				<Input type="password" size="" placeholder="Placeholder" />
			</Col>
			<Col xs>
				<Input type="password" size="" value="value" />
			</Col>
			<Col xs>
				<Input type="password" size="" disabled placeholder="Disabled" />
			</Col>
		</Row>

		<MediumHeading>Sizes</MediumHeading>
		<Row>
			<Col xs>
				<Input type="password" size="tiny" />
			</Col>
			<Col xs>
				<Input type="password" size="tiny" placeholder="tiny" />
			</Col>
			<Col xs>
				<Input type="password" size="tiny" value="tiny" />
			</Col>
			<Col xs>
				<Input type="password" size="tiny" disabled placeholder="Disabled" />
			</Col>
		</Row>
		<Row>
			<Col xs>
				<Input type="password" size="small" />
			</Col>
			<Col xs>
				<Input type="password" size="small" placeholder="small" />
			</Col>
			<Col xs>
				<Input type="password" size="small" value="small" />
			</Col>
			<Col xs>
				<Input type="password" size="small" disabled placeholder="Disabled" />
			</Col>
		</Row>
		<Row>
			<Col xs>
				<Input type="password" size="" />
			</Col>
			<Col xs>
				<Input type="password" size="" placeholder="default" />
			</Col>
			<Col xs>
				<Input type="password" size="" value="default" />
			</Col>
			<Col xs>
				<Input type="password" size="" disabled placeholder="Disabled" />
			</Col>
		</Row>
		<Row>
			<Col xs>
				<Input type="password" size="large" />
			</Col>
			<Col xs>
				<Input type="password" size="large" placeholder="large" />
			</Col>
			<Col xs>
				<Input type="password" size="large" value="large" />
			</Col>
			<Col xs>
				<Input type="password" size="large" disabled placeholder="Disabled" />
			</Col>
		</Row>
	</>
);
TextInputStory.propTypes = {
	type: PropTypes.string,
};
TextInputStory.defaultProps = {
	type: 'text',
};

export default withInfo()(TextInputStory);
