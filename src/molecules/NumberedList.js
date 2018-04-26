import React from 'react';
import PropTypes from 'prop-types';

import { NumberedListItem } from '../atoms/NumberedListItem';

const NumberedList = ({ items, itemProp }) => (
	<ol>
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
	</ol>
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
