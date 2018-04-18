import React from 'react';
import PropTypes from 'prop-types';

import { NumberedListItem } from '../atoms/NumberedListItem';

const NumberedList = ({ items }) => (
	<React.Fragment>
		{items.map((item, index) => {
			return (
				<NumberedListItem
					itemProp="recipeInstructions"
					key={index}
				>
					{item}
				</NumberedListItem>
			);
		})}
	</React.Fragment>
);

NumberedList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string),
};
NumberedList.defaultProps = {
	items: [],
};

export { NumberedList };
