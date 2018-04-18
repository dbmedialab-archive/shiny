import React from 'react';
import PropTypes from 'prop-types';

import { NumberedListItem } from '../atoms/NumberedListItem';

const NumberedList = ({ items, itemProp }) => (
	<React.Fragment>
		{items.map((item, index) => {
			return (
				<NumberedListItem
					itemProp={itemProp}
					key={index}
				>
					{item}
				</NumberedListItem>
			);
		})}
	</React.Fragment>
);

NumberedList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.node),
	itemProp: PropTypes.string,
};
NumberedList.defaultProps = {
	items: [],
	itemProp: '',
};

export { NumberedList };
