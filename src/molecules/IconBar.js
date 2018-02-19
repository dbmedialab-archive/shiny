import React from 'react';
import PropTypes from 'prop-types';
import {
	Row,
	Col,
	IconWithText,
} from '..';

const IconBar = props => (
	<Row>
		{
			props.entities.map(entity => (
				<Col xs>
					<IconWithText {...entity} textSize={props.textSize} iconSize={props.iconSize} />
				</Col>
			))
		}
	</Row>
);

IconBar.propTypes = {
	entities: PropTypes.arrayOf({
		name: PropTypes.string.isRequired,
		value: PropTypes.number,
	}),
	textSize: PropTypes.number.isRequired,
	iconSize: PropTypes.number.isRequired,
};

IconBar.defaultProps = {
	entities: [],
};

export { IconBar };
