import React from 'react';
import PropTypes from 'prop-types';
import {
	Row,
	Col,
	IconWithText,
} from '..';

const PaddingLess = Col.extend`
	padding: 0;
`;

const IconBar = props => (
	<Row>
		{
			props.entities.map((entity, i) => (
				<PaddingLess xs key={i}>
					<IconWithText {...entity} textSize={props.textSize} iconSize={props.iconSize} />
				</PaddingLess>
			))
		}
	</Row>
);

IconBar.propTypes = {
	entities: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		value: PropTypes.number,
	})),
	textSize: PropTypes.number.isRequired,
	iconSize: PropTypes.number.isRequired,
};

IconBar.defaultProps = {
	entities: [],
};

export { IconBar };
