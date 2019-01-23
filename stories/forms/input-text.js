import React from 'react';
import PropTypes from 'prop-types';

import { withInfo } from '@storybook/addon-info';

import {
	Row, Col, TextInput, Input, MediumHeading,
} from '../../src';

const TextInputStory = () => (
	<>
		<MediumHeading>Values, placeholders etc</MediumHeading>
		<Row>
			<Col xs>
				<Input type="text" size="" />
			</Col>
			<Col xs>
				<Input type="text" size="" placeholder="Placeholder" />
			</Col>
			<Col xs>
				<Input type="text" size="" value="value" />
			</Col>
			<Col xs>
				<Input type="text" size="" disabled placeholder="Disabled" />
			</Col>
		</Row>

		<MediumHeading>Sizes</MediumHeading>
		<Row>
			<Col xs>
				<Input type="text" size="tiny" />
			</Col>
			<Col xs>
				<Input type="text" size="tiny" placeholder="tiny" />
			</Col>
			<Col xs>
				<Input type="text" size="tiny" value="tiny" />
			</Col>
			<Col xs>
				<Input type="text" size="tiny" disabled placeholder="Disabled" />
			</Col>
		</Row>
		<Row>
			<Col xs>
				<Input type="text" size="small" />
			</Col>
			<Col xs>
				<Input type="text" size="small" placeholder="small" />
			</Col>
			<Col xs>
				<Input type="text" size="small" value="small" />
			</Col>
			<Col xs>
				<Input type="text" size="small" disabled placeholder="Disabled" />
			</Col>
		</Row>
		<Row>
			<Col xs>
				<Input type="text" size="" />
			</Col>
			<Col xs>
				<Input type="text" size="" placeholder="default" />
			</Col>
			<Col xs>
				<Input type="text" size="" value="default" />
			</Col>
			<Col xs>
				<Input type="text" size="" disabled placeholder="Disabled" />
			</Col>
		</Row>
		<Row>
			<Col xs>
				<Input type="text" size="large" />
			</Col>
			<Col xs>
				<Input type="text" size="large" placeholder="large" />
			</Col>
			<Col xs>
				<Input type="text" size="large" value="large" />
			</Col>
			<Col xs>
				<Input type="text" size="large" disabled placeholder="Disabled" />
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
