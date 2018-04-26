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

const RowBase = Row.extend`
	align-items: baseline;
`;

const IconBar = props => (
	<RowBase>
		{
			props.entities.map((entity, i) => (
				<PaddingLess xs={4} key={i}>
					<IconWithText {...entity} textSize={props.textSize} iconSize={props.iconSize} />
				</PaddingLess>
			))
		}
	</RowBase>
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
