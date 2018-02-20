import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const OrderedListWrapper = styled.ol`
	list-style: none;
    padding: 0;
`;

const OrderedListItem = styled.li`
	counter-increment: item;
   	margin-bottom: ${props => props.theme.variables.headingMediumLineHeight};
  	line-height: ${props => props.theme.variables.headingMediumLineHeight};
  	position: relative;

	&:before {
		content: counter(item);
		font-size: ${props => props.theme.variables.headingXlargeSize};
		display: inline-block;
		position: absolute;
    	left: -3.5rem;
    	top: 0.5rem;
    }
`;

const OrderedList = (props) => {
	return (
		<OrderedListWrapper>{
			props.data.map((item) => {
				return <OrderedListItem>{item}</OrderedListItem>;
			})
		}
		</OrderedListWrapper>
	);
};

OrderedList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.string),
};

OrderedList.defaultProps = {
	data: [],
};

export default OrderedList;
