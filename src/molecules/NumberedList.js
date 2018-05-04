import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { NumberedListItem } from '../atoms/NumberedListItem';

const Ol = styled.ol`
	margin: 0;
	padding: 0;
`;

const NumberedList = ({ items, itemProp, className }) => (
	<Ol className={className}>
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
	</Ol>
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
